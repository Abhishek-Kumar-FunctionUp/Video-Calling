import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./SignIn.module.css";
import Input from "../../Atom/Input/Input";
import CustomButton from "../../Atom/Button/Button";
import { GoKey } from "react-icons/go";
import { AiFillApple } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FireBase";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate()

  const handleSubmit = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
       nav("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <div className={style.main}>
      <div className={style.nav}>
        <img src="https://imgur.com/QYM2tzN.png" alt="logo" />
        <div className={style.nav_link}>
          <p>
            <span>New to Zoom? </span><Link to="/signup">Sign Up</Link>
          </p>
          <a href="https://support.zoom.us/hc/en-us">Support</a>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.content_image}>
          <img
            src="https://st1.zoom.us/fe-static/fe-signup-login-active/img/banner-step-1.2faf107a.png"
            alt="zoom"
          />
        </div>
        <div className={style.form}>
          <h1>Sign In</h1>
          <div className={style.form_container}>
            <Input
              placeholder="Email Address"
              className={style.input}
              type="email"
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              className={style.input}
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <p style={{ marginTop: "-0.1vh", color: "#0956b5" }}>
              Forgot password?
            </p>
            <CustomButton text="Sign In" className={style.btn} onClick={handleSubmit}/>
            <p>
              By signing in, I agree to the{" "}
              <a href="https://explore.zoom.us/en/privacy/" target="_blank">
                Zoom's Privacy Statement{" "}
              </a>and{" "}
              <a href="https://explore.zoom.us/en/terms/" target="_blank">
                Terms of Service.
              </a>
            </p>
            <span>
              <span>Or sign in with</span>
            </span>
            <div className={style.icons_container}>
              <GoKey className={style.icon} />
              <AiFillApple className={style.icon} />
              <img src="https://imgur.com/pCqLZbs.png" alt="google" />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt="facbook"
              />
            </div>
            <p>
              Zoom is protected by reCAPTCHA and the Google<a
                href="https://policies.google.com/privacy"
                target="_blank"
              >
                {" "}Privacy Policy{" "}
              </a>and{" "}
              <a href="https://policies.google.com/terms" target="_blank">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
