import React, { useEffect, useState } from 'react';
import styles from "../stylesheets/Navbar.module.css";
import { AiFillHome } from "react-icons/ai";
import { FiSend, FiHeart } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ResponsiveNav = () => {


  return (
<div className={styles.ContainerResponsive}>
        <div className={styles.ResponsiveTitle}>
          <span>Instagram</span></div>
        <div className={styles.ResponsiveIcons}>
          <div><span><FiHeart className={styles.Ricon} /></span></div>
          <div><span><FiSend className={styles.Ricon} /></span></div>
        </div>
      </div> 
  )

}

