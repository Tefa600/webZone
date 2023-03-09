import React from "react";
import "./Profile.css";


function UserProfile() {

    let ProfileDetails = 'This is the details for the user for the meantime';
    return (
        // big container
        <div className="bigContainer">
        {/*    left Container*  for the long detailed guest info*/}
            <div className="leftContainer">
                <div className="profilePicture mt-5">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={require('./Profile-Male-PNG.png')} alt="Your Picture" className="guestPic"/>
                </div>
                <div className="userTabs mt-5 center">
                    <div className="profileDetails mt-5 center">{ProfileDetails}</div>
                    <button className="btn btn-primary expandedDetailsButton mt-5">Expand Details</button>
                    <button className="btn btn-primary editButton mt-1">Edit</button>
                    <button className="History btn btn-primary historyButton mt-1 ">Show History</button>
                    <div className="btn btn-danger contactButton mt-1">Contact US</div>

                </div>

            </div>
            <div className="rightContainer">
                <div className="historyCards mt-5">This is the historty for the guest</div>
            </div>
        {/*
        Right Container* for the history and so on
        This box should show every content of the buttons in the left box

        */}

        </div>
    );
}

export default UserProfile;