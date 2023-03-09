import React from "react";
import "./vision.css";

function Vision() {
  return (
    <div className="mainBody">
      <div className="leftBody">
        <div className="leftContent">
          <h1 className="justify-content-center">Zone Rules</h1>
          <p className="rules">Leave the place clean as you found it</p>
          <p className="rules">
            Don't raise your voice, and keep it down so you, and others can
            concentrate on doing whatever you are working on
          </p>
          <p className="rules">
            Don't act on your own, and please let the zone owner, if there is
            any concerns, or problem
          </p>
          <p className="rules">
            You are ought to read the Zone rules before going, as they might
            differ from a zone to another
          </p>
          <p className="rules"></p>
        </div>
      </div>

      <div className="rightBody">
        <div className="rightContent">
          <h1>WHAT ZONE AIMS FOR</h1>
          <p>we aim to save your time and effort finding Workspace</p>
          <p>
            collect the best workspaces for you just to explore and find your
            zone
          </p>
          <p>
            make it easy for you to book your seat without feeling the need to
            show up yourself before the appointment
          </p>
          <p>
            save it for you if there is no empty seats, rooms that suit your
            needs
          </p>
          <p>
            offer some recommendations for you, and show you the nearest zones
            around you in case you didn't know
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision;
