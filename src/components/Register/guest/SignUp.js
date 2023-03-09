import React from "react";
import "./signUp.css";
import signUpBG from "../../../images/signup.jpg";
function SignUp() {
  let isShownRepeated;
  let isShown;
  return (
    // big div
    <div className={"bigBox"} style={{
      backgroundImage: "url(" + signUpBG + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100vh",
      color: "#f5f5f5",
    }}>
      <div className="bigBody">


        <div className={"signUPBox"}>

          {/*  Name*/}
          <div className="input-group mb-3 ">
          <span className="input-group-text">
            Name
          </span>
            <input
                type="text"
                className="form-control"
                placeholder="Enter your Full Name. . ."
            />
          </div>
          {/*    email*/}
          <div className="input-group mb-3 ">
          <span className="input-group-text">
            Email
          </span>
            <input
                type="text"
                className="form-control"
                placeholder="Enter your email address. . ."
            />
          </div>
          {/*    Password*/}
          <div className="input-group mb-3">
          <span className="input-group-text">
            Password
          </span>
            <input
                type={isShown ? "text" : "password"}
                className="form-control"
                placeholder="Enter your password. . ."
            />
          </div>
          {/*    Repeat password*/}
          <div className="input-group mb-3">
          <span className="input-group-text">
            Repeat Password
          </span>
            <input
                type={isShownRepeated ? "text" : "password"}
                className="form-control"
                placeholder="Repeat your password. . ."
            />
          </div>
          {/*    Phone Number*/}
          <div className="input-group mb-3 ">
          <span className="input-group-text">
            Phone Number
          </span>
            <input
                type="text"
                className="form-control"
                placeholder="Enter your Phone Number. . ."
            />
          </div>

          <div className="buttonss">
            <div className={"btn btn-primary m-lg-3"}>Sign Up</div>
            <button type="button" className="btn btn-secondary m-lg-3">Become a partner</button>
            <button type="button" className="btn btn-secondary m-lg-3">Sign in</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SignUp;
