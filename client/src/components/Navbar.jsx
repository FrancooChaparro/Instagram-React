import React, { useEffect, useState } from 'react';
import styles from "../stylesheets/Navbar.module.css";
import { AiFillHome } from "react-icons/ai";
import { FiSend, FiHeart } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const userActive = JSON.parse(localStorage.getItem("USUARIO")) || []
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // llama a la función de manejo de tamaño inicialmente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (

    isMobile ? <div className={styles.ContainerNav}>
      <div className={styles.ContainerTitle}>
        <Link style={{ textDecoration: "none" }} to="/"> <span>Instagram</span></Link>
      </div>

      <div className={styles.ContainerSearch}>
        <input type="text" placeholder='Search..' />
      </div>

      <div className={styles.ContainerIcons}>
        <div><span><Link style={{ textDecoration: "none", color: "black" }} to="/"><AiFillHome className={styles.icon} /></Link> </span></div>
        <div><span><FiSend className={styles.icon} /></span></div>
        <div><span><FiHeart className={styles.icon} /></span></div>
        <div style={{ marginRight: "20px" }}><Link style={{ textDecoration: "none" }} to="/Profile"><span><img className={styles.profileimg} src={userActive.image} alt="" /></span></Link></div>
      </div>
    </div>
      :
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
{/* <img src={userActive.image} alt="" /> */}
{/* <FaUserAlt className={styles.icon} /> */}

{/* <Link style={{ textDecoration: "none" }} to="/"></Link></Link> */}