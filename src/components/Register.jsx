import React from 'react';
import styles from "../stylesheets/Register.module.css";

export const Register = () => {
  return (
    <div className={styles.ContainerAll}>
        <div className={styles.ContainerHeader}>
          <div className={styles.ContainerHeaderTop}>
            <span>Instagram</span>
          </div>
          <div className={styles.ContainerHeaderBot}>
            <div>
                <span>Regístrate para ver fotos y vídeos</span> <span style={{paddingLeft: "70px"}}>de tus amigos.</span>
            </div>
            <div className={styles.ContainerBtn}>
                <button className={styles.btn}>Iniciar Session con facebook</button>
            </div>
            </div>
        </div>

        <div className={styles.ContainerForm}>
              <div className={styles.ContainerFormTop}>
                  <form action="">
                      <input type="text" placeholder='Correo Electronico'/>
                      <input type="text" placeholder='Nombre Completo'/>
                      <input type="text" placeholder='Nombre de Usuario'/>
                      <input type="text" placeholder='Contraseña'/>
                      <div className={styles.ContainerFormMid}><span>Al registrarte, aceptas nuestras Condiciones, nuestra Política de privacidad y nuestra Política de cookies.</span></div>
                      <div className={styles.ContainerFormBot}>
                          <button className={styles.btn2}>Registrarse</button>
                      </div>
                  </form>
              </div>
        </div>


        <div className={styles.ContainerFooter}>   
        <div className={styles.FooterTop}><span>¿Tienes una cuenta? <a href="">Entrar</a></span></div>
                <div className={styles.FooterBot}>
                  <div className={styles.ContainerBanner}> <img src="https://es.logodownload.org/wp-content/uploads/2019/06/disponible-en-google-play-badge-1.png" alt="Google" /> </div>
                  <div className={styles.ContainerBanner}><img src="https://www.rccc.eu/cacheCCC/images/microsoft.png" alt="Microsoft" /> </div>
                </div>
        </div>
    </div>
  )
}
