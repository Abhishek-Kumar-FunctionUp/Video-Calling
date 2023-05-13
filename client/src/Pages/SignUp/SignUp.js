import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import style from "./SignUp.module.css";
import Input from "../../Atom/Input/Input";
import CustomButton from "../../Atom/Button/Button";
import { GoKey } from "react-icons/go";
import { AiFillApple } from "react-icons/ai";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();

  function handleContinue() {
    dispatch({ type: "EMAIL_DATA", payload: email });
    nav("/signupform");
  }
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
            src="	https://st1.zoom.us/fe-static/fe-signup-login-active/img/banner-step-2.4b72ef61.png"
            alt="zoom"
          />
        </div>
        <div className={style.form}>
          <h1>Let's Get Started</h1>
          <div className={style.form_container}>
            <Input
              placeholder="Email Address"
              className={style.input}
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
            />
            <CustomButton
              text="Continue"
              className={style.btn}
              onClick={handleContinue}
            />
            <p>
              By proceeding, I agree to {" "}
              <a href="https://explore.zoom.us/en/privacy/" target="_blank">
                Zoom's Privacy Statement{" "}
              </a>and{" "}
              <a href="https://explore.zoom.us/en/terms/" target="_blank">
                Terms of Service.
              </a>
            </p>
            <span>
              <span>Or sign up with</span>
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
