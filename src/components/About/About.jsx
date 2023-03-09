import React from 'react'
import aboutpic from '../../images/79671723_1029776927356297_4415470205581393920_o.jpg'
import styles from './About.modules.css'
export default function About() {
    return (
        <>
            <div className={`about  ${styles.about}`}>
                <div className='text-center position-relative d-flex justify-content-center align-items-center'>
                    <h2 className='mb-0 position-absolute'>About Us</h2>
                    <h3 className='mb-0'>A</h3>
                </div>

                <p className="text-center w-50 m-auto">We are Seniors 2023 At Faculty of Science</p>
            </div>
            <br></br>
            <div className="container mt-4">
                <div className="row">
                    <div className='col-md-6'>
                        <div className="1stP">It all started with us trying finding a suitable workspace to run a meeting its objective determining what our graduation project will be?
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img className='w-100 h-100' src={aboutpic} alt="About Pic" />
                    </div>

                </div>
            </div>
        </>
    )
}