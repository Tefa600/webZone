import React, { useState } from "react";
import "./SignIn.css";
import signBg from "../../../images/70315747_2503614136348024_2059368429667745792_o.jpg";

function SignIn() {
  // This variable determines whether password is shown or not
  const [isShown, setIsSHown] = useState(false);

  // This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  function signning() {}

  return (

    // big div
    <div
      className="bg_image"
      style={{
        backgroundImage: "url(" + signBg + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
      <div className="bigDiv">
        <div className={"regBox"}>
          <div className="mb-4">
            <h1 className={"text-white"}>Welcome to the Zone</h1>
          </div>

          {/*email panel*/}
          <div className="input-group pt-4 p-lg-2">
            <span className="input-group-text" id="basic-addon1">
              Email
            </span>
            <input
              type="text"
              id={"email"}
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
          </div>
          {/*password*/}
          <div className="input-group mb-3 p-lg-2">
            <span className="input-group-text" id="basic-addon1">
              Password
            </span>
            <input
              type={isShown ? "text" : "password"}
              className="form-control"
              id={"passo"}
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="checkbox-container">
            {/*<div className={"m-lg-2 text-white "} htmlFor="checkbox">*/}
            {/*  Show password?*/}
            {/*</div>*/}
            {/*<input*/}
            {/*    className="form-check-input mt-3"*/}
            {/*    id={"checkBox"}*/}
            {/*    type="checkbox"*/}
            {/*    value=""*/}
            {/*    aria-label="Checkbox for following text input"*/}
            {/*    checked={isShown}*/}
            {/*    onChange={togglePassword}*/}
            {/*/>*/}

            <button className="signinButton mt-3" onClick={signning}>
              Sign In
            </button>
          </div>
          {/*forget password*/}
          <div className={"mt-2"}>
            <a id={"A"} href="#">
              Forgot Password?
            </a>
          </div>

          {/*buttons for logging in */}

          <div className={"justify-content-center "}>
            <div className={"mt-2 justify-content-center"}>
              <a id={"A"} href={"/Register"}>
                New to the family? Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
