import React from "react";

function SignUp(){
    return(
        // big div
        <div className={"row justify-content-center"}>
            <div className={"Header"}>
                <h1>Welcome Partner</h1>
            </div>

            <div className={"regBox"}>

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
                {/*    Zone Number*/}
                <div className="input-group mb-3 ">
          <span className="input-group-text">
            Zone Number
          </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your Zone Number. . ."
                    />
                </div>

                <div className={"btn btn-primary"}>Sign Up</div>
            </div>
        </div>
    );
}

export default SignUp;