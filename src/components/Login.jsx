import React from 'react';
import styles from "../stylesheets/Login.module.css"
import hola from "../images/hola.png"

export const Login = () => {
  return (
    <div className={styles.container}>
        <div className={styles.ContainerIMG}> 
              <img src={hola} alt="" />
        </div>
        <div className={styles.ContainerForm}>
              <div className={styles.Title}></div>
              <div className={styles.Form}></div>
              <div className={styles.Google}></div>
              <div className={styles.Footer}></div>
        </div>
    </div>
  )
}
