import React from 'react'
import homeBg from '../../images/1.jpg'
import styles from './Home.module.css'
import Vision from "../Vision/vision";
export default function Home() {
  return (
    <>  
  <div
        class="bg_image"
        style={{
          backgroundImage: 'url('+homeBg+')',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: 'no-repeat',
          width:"100%",
          height: "100vh",
          color: "#f5f5f5"
        }}
      >
        <div className={`buttonBg ${styles.butBg}`}>
          <div>
        <h1>WELCOME TO THE ZONE</h1>
        <form>
          <div className="inputZone m-auto my-4">
            <label className='urZone' htmlFor="your_zone">ENTER YOUR ZONE</label>
              <input type="text" placeholder="Where do you want to work?" className='form-control mt-2' name='your_zone'/>
          </div>
          <button className='btn btn-info'>Find Your Workspace</button>
          <div className='clearfix'></div>
        </form>
        </div>
        </div>

      </div>
        <Vision></Vision>
</>
  )
}
