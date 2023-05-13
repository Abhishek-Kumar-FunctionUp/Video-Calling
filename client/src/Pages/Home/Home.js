import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../FireBase";
import { BsCameraVideoFill, BsFillCalendarDateFill } from "react-icons/bs";
import { AiFillPlusSquare } from "react-icons/ai";
import { IoIosShare } from "react-icons/io";
import style from "./Home.module.css";
import NavbarHome from "../../Component/NavbarHome/NavbarHome";

export default function Home() {
  const [email, setEmail] = useState("");
  const nav = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.email;

        // ...
        console.log("uid", user);
        setEmail(user.email);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);

  function handleNavigate(){
    nav("/lobbyscreen")
  }

  return (
    <div>
      <NavbarHome />
      <div className={style.main}>
        <div className={style.left_img}>
          <img src="https://imgur.com/mzMWDGi.png" alt="pic" />
        </div>
        <div className={style.options}>
          <BsCameraVideoFill className={style.meet} onClick={handleNavigate}/>
          <AiFillPlusSquare className={style.icon} onClick={handleNavigate}/>
          <BsFillCalendarDateFill className={style.icon} />
          <IoIosShare className={style.icon} />
        </div>
      </div>
    </div>
  );
}
