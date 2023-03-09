import React from 'react'
import "./mail.css"
export default function Recommendation() {
  return (
      <div className="bigBox">
        <div className="logo">
          <img src="https://i.imgur.com/5m7J1P6.png" alt="logo Image"/>

        </div>
          <div className="mail">
            <div className="mailHead"><h1>Reseting Your SpaceZone Password</h1></div>
              <div className="greeting mt-2 justify-content-center d-inline-flex">
                  <h4>Hello Guest</h4>
              </div>
              <div className="texBody mt-2 ">We are very sorry for your brain damage that you have forgotten your password, but Don't worry</div>
              <div className="reset">
                  <button  className="res mt-4 btn btn-danger">Reset Password</button>
              </div>
              <div className="texBody mt-3">
                  If you didn't request this email, please beware that this might be an attempt to steal your account
              </div>

              <h5 className="texBody mt-1">SpaceZone Team</h5>


              <div className="footer mt-3">
                  <a href="Home" className="home">SpaceZone</a>
                  <a href="ContactUs">Contact US</a>
                  <a href="AboutUs">Terms&Conditions</a>
              </div>

          </div>


      </div>
  )
}
