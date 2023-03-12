import React from 'react';
import styles from "../stylesheets/Home.module.css";
import { MenuLateral } from "./MenuLateral";
import { Posts } from "./Posts";

export const Home = () => {
  return (
    <div className={styles.HomeContainer}>
       <div className={styles.HomeIzq}>
        <div style={{width: "900px", paddingLeft: "40px"}}>
           <Posts />
           <Posts />
           <Posts />
        </div>
      </div>

       <div className={styles.HomeDer}><MenuLateral /></div>
     </div>
  )
}
