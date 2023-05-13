import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./SignUpForm.module.css";
import Input from "../../Atom/Input/Input";
import CustomButton from "../../Atom/Button/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FireBase";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [fname, setFName] = useState();
  const [lname, setLName] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCPassword] = useState();
  const nav = useNavigate();
  const list = useSelector(state => state.dataReducer);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(list);
    await createUserWithEmailAndPassword(auth, list, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        
        nav("/");
        // ...
      })
      
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className={style.main}>
      <div className={style.nav}>
        <img src="https://imgur.com/QYM2tzN.png" alt="logo" />
        <div className={style.nav_link}>
          <p>
           <span> Already have an account? </span><Link to="/">Sign In</Link>
          </p>
          <a href="https://support.zoom.us/hc/en-us">Support</a>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.content_image}>
          <img
            src="	https://st1.zoom.us/fe-static/fe-signup-login-active/img/banner-step-3.948cd867.png"
            alt="zoom"
          />
        </div>
        <div className={style.form}>
          <h1>Create Your Account</h1>
          <p>Enter your full name and password.</p>
          <div className={style.form_container}>
            <Input
              placeholder="First Name"
              className={style.input}
              value={fname}
              onChange={e => setFName(e.target.value)}
              type="text"
            />
            <Input
              placeholder="Last Name"
              className={style.input}
              value={lname}
              onChange={e => setLName(e.target.value)}
              type="text"
            />
            <Input
              placeholder="Password"
              className={style.input}
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
            <Input
              placeholder="Confirm Password"
              className={style.input}
              value={cpassword}
              onChange={e => setCPassword(e.target.value)}
              type="password"
            />
            <CustomButton
              text="Continue"
              className={style.btn}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
