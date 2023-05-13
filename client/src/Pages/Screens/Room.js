import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import peer from "../../service/peer";
import { useSocket } from "../../context/SocketProvider";
import style from "./Room.module.css"
import MeetingOption from "../../Component/MeetingOption/MeetingOption"
import CustomButton from "../../Atom/Button/Button";

const RoomPage = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(
    async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      });
      const offer = await peer.getOffer();
      socket.emit("user:call", { to: remoteSocketId, offer });
      setMyStream(stream);
    },
    [remoteSocketId, socket]
  );

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(
    () => {
      for (const track of myStream.getTracks()) {
        peer.peer.addTrack(track, myStream);
      }
    },
    [myStream]
  );

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(
    async () => {
      const offer = await peer.getOffer();
      socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
    },
    [remoteSocketId, socket]
  );

  useEffect(
    () => {
      peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
      return () => {
        peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
      };
    },
    [handleNegoNeeded]
  );

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("track", async ev => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(
    () => {
      socket.on("user:joined", handleUserJoined);
      socket.on("incomming:call", handleIncommingCall);
      socket.on("call:accepted", handleCallAccepted);
      socket.on("peer:nego:needed", handleNegoNeedIncomming);
      socket.on("peer:nego:final", handleNegoNeedFinal);

      return () => {
        socket.off("user:joined", handleUserJoined);
        socket.off("incomming:call", handleIncommingCall);
        socket.off("call:accepted", handleCallAccepted);
        socket.off("peer:nego:needed", handleNegoNeedIncomming);
        socket.off("peer:nego:final", handleNegoNeedFinal);
      };
    },
    [
      socket,
      handleUserJoined,
      handleIncommingCall,
      handleCallAccepted,
      handleNegoNeedIncomming,
      handleNegoNeedFinal
    ]
  );

  return (
    <div className={style.main}>
    <div>
      <h4>
        {remoteSocketId ? "Connected" : "No one in room"}
      </h4>
      <div className={style.btnContainer}>
      {myStream && <CustomButton onClick={sendStreams} text="Send Stream" className={style.btn}/>}
      {remoteSocketId && <CustomButton onClick={handleCallUser} text="Call" className={style.btn}/>}
      </div>
      <div className={style.streamConatiner}>
      <div>
      {myStream &&
        <div className={style.stream}>
          <h4>My Stream</h4>
          <ReactPlayer
          className={style.player}
            playing
            muted
            height="100px"
            width="200px"
            url={myStream}
          />
        </div>}
        </div>
        <div>
      {remoteStream &&
        <div className={style.stream}>
          <h4>Remote Stream</h4>
          <ReactPlayer
          className={style.player}
            playing
            muted
            height="100px"
            width="200px"
            url={remoteStream}
          />
        </div>}
        </div>
        </div>
        </div>
        <MeetingOption />
    </div>
  );
};

export default RoomPage;
