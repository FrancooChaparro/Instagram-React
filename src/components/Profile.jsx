import React from 'react';
import styles from "../stylesheets/Profile.module.css";
import { VscSettingsGear } from "react-icons/vsc"

export const Profile = () => {
  return (
    <div className={styles.ContainerProfile}>

          <div className={styles.HeaderProfile}>
              <div className={styles.ContainerImg}>
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
              </div>
              <div className={styles.ContainerData}>
                  <div className={styles.top}>
                    <div> <span>Cristina CFK</span> </div>
                    <div><button style={{marginTop: "2px"}}> <strong><span style={{fontSize: "12px"}}>Editar Perfil</span></strong></button></div>
                    <div><VscSettingsGear style={{marginTop: "13px",fontSize: "19px"}}/></div>
                  </div>
                  <div className={styles.mid}>
                    <div> <strong>1000</strong> publicaciones</div>
                    <div> <strong>1000</strong> seguidores</div>
                    <div> <strong>1000</strong> seguidos</div>
                  </div>
                  <div className={styles.bot}>
                     <div> <span className={styles.Subtitle}><strong>Soy cristina</strong></span></div>
                     <div><span className={styles.hash}>#AguanteReact #AguanteJS #AguanteNode</span> </div>
                  </div>
              </div>
          </div>
s

          <div className={styles.BodyProfile}>

          </div>

    </div>
  )
}
