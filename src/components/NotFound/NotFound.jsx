import React from 'react'
import notFound from '../../images/not-found.jpg'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (

    <div className={`ntfound text-center ${styles.ntfound}`}>
      <img src={notFound} class="img-fluid" alt="" />
        <div className="test">hello not found   </div>
      </div>




  )
}