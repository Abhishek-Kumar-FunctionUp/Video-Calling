import React, { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { MdOutlineHistory } from "react-icons/md";
import { FiBell } from "react-icons/fi";
import { navData } from "../../Data";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../FireBase";
import { onAuthStateChanged } from "firebase/auth";
import style from "./NavbarHome.module.css";

export default function NavbarHome() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");

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

  function handleLogOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        nav("/");
        alert("Logged out successfully");
      })
      .catch(error => {
        // An error happened.
      });
  }

  return (
    <div className={style.main}>
      <div className={style.icon}>
        <AiOutlineLeft className={style.icons} />
        <AiOutlineRight className={style.icons} />
        <MdOutlineHistory className={style.icons} />
      </div>
      <input placeholder="Search" />
      {navData.map(e =>
        <div className={style.options}>
          {e.icon}
          <p>
            {e.action}
          </p>
        </div>
      )}
      <div className={style.icon}>
        <FiBell className={style.icons} />
        <button className={style.icons} onClick={handleLogOut} title="Log Out">
          {email.toUpperCase().slice(0, 2)}
        </button>
      </div>
    </div>
  );
}
