import React from 'react';
import styles from "../stylesheets/Navbar.module.css";
import { AiFillHome } from "react-icons/ai";
import { FiSend, FiHeart } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    // <div className={styles.ContainerNav}>
    //     <div className={styles.ContainerTitle}>
    //     <Link style={{textDecoration: "none"}} to="/"> <span>Instagram</span></Link>
    //     </div>

    //     <div className={styles.ContainerSearch}>
    //       <input type="text" placeholder='Search..' />
    //     </div>

    //     <div className={styles.ContainerIcons}>
    //       <div> <Link style={{textDecoration: "none"}} to="/"><span><AiFillHome className={styles.icon} /></span></Link></div>
    //       <div><span><FiSend className={styles.icon} /></span></div>
    //       <div><span><FiHeart className={styles.icon} /></span></div>
    //       <div style={{marginRight: "20px"}}><Link style={{textDecoration: "none"}} to="/Profile"><span><FaUserAlt className={styles.icon}  /></span></Link></div>   
    //     </div>
    // </div>

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
