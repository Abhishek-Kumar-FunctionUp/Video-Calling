import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../context/SocketProvider";
import style from "./Lobby.module.css";
import Input from "../../Atom/Input/Input";
import CustomButton from "../../Atom/Button/Button";

export default function LobbyScreen() {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    e => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    data => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(
    () => {
      socket.on("room:join", handleJoinRoom);
      return () => {
        socket.off("room:join", handleJoinRoom);
      };
    },
    [socket, handleJoinRoom]
  );

  return (
    <div className={style.main}>
      <div className={style.wrapper}>
        <div className={style.heading}>
          <img src="https://imgur.com/6USBhk6.png" alt="heading" />
          <span> Zoom</span>
        </div>
        <h1>Meeting</h1>
        <form onSubmit={handleSubmitForm}>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className={style.input}
          />
          <br />
          <Input
            type="text"
            id="room"
            value={room}
            onChange={e => setRoom(e.target.value)}
            placeholder="Room No."
            className={style.input}
          />
          <br />
          <CustomButton className={style.btn} text="Join" />
        </form>
      </div>
    </div>
  );
}
