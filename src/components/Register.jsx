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
        <div className={styles.ContainerForm}></div>
        <div className={styles.ContainerFooter}></div>
    </div>
  )
}
