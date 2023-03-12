import React from 'react';
import styles from "../stylesheets/Navbar.module.css";
import { AiFillHome } from "react-icons/ai";
import { FiSend, FiHeart } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className={styles.ContainerNav}>

        <div className={styles.ContainerTitle}>
          <span>Instagram</span>
        </div>

        <div className={styles.ContainerSearch}>
          <input type="text" placeholder='Search..' />
        </div>

        <div className={styles.ContainerIcons}>
          <div><span><AiFillHome className={styles.icon} /></span></div>
          <div><span><FiSend className={styles.icon} /></span></div>
          <div><span><FiHeart className={styles.icon} /></span></div>
          <div style={{marginRight: "20px"}}><span><FaUserAlt className={styles.icon}  /></span></div>   
        </div>

    </div>
  )
}
