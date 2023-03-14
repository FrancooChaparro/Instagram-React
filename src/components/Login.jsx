import React from 'react';
import styles from "../stylesheets/Login.module.css";
import hola from "../images/hola.png";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className={styles.container}>
        <div className={styles.ContainerIMG}> 
              <img src={hola} alt="imgInstagram" />
        </div>
        <div className={styles.ContainerForm}>
              <div className={styles.Title}><span>Instagram</span></div>
              <div className={styles.Form}>
                <div className={styles.FormDiv}>
                  <form>
                      <input type="text" placeholder='Enter email'/>
                      <input type="password" placeholder='password' />
                     <div className={styles.ContainerBtn}><button type='submit' className={styles.btn}>Entrar</button></div> 
                  </form>
                  </div>  
              </div>
              <div className={styles.Google}>
                <div className={styles.top}><span>Iniciar session con facebook</span> </div>
                <div className={styles.bot}><span>¿Has olvidado la contraseña?</span> </div>
              </div>
              <div className={styles.Footer}>
                <div className={styles.FooterTop}><span>Descarga la aplicacion.</span></div>
                <div className={styles.FooterBot}>
                  <div className={styles.ContainerBanner}> <img src="https://es.logodownload.org/wp-content/uploads/2019/06/disponible-en-google-play-badge-1.png" alt="Google" /> </div>
                  <div className={styles.ContainerBanner}><img src="https://www.rccc.eu/cacheCCC/images/microsoft.png" alt="Microsoft" /> </div>
                </div>
              </div>
        </div>
    </div>
  )
}
{/* <img src="https://play.google.com/intl/es-419/badges/static/images/badges/es-419_badge_web_generic.png" alt="GooglePlay" /> */}
// {/* <img src="https://www.rccc.eu/cacheCCC/images/microsoft.png" alt="Microsoft" /> */}