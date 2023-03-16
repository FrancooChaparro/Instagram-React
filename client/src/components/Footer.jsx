import React from 'react';
import styles from "../stylesheets/Footer.module.css";
import { VscHome } from "react-icons/vsc";
import { FiSearch, FiHeart} from "react-icons/fi";
import { MdOutlineAddBox } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className={styles.ResponsiveContainer}>
        <div className={styles.ResponsiveIcon}><Link  style={{textDecoration: "none"}} to="/" ><span>< VscHome  className={styles.Ricona}/></span></ Link></div>
        <div className={styles.ResponsiveIcon}><Link  style={{textDecoration: "none"}} to="/Search"><span><FiSearch className={styles.Ricon}/></span></ Link></div>
        <div className={styles.ResponsiveIcon}><span><MdOutlineAddBox className={styles.Ricon}/></span></div>
        <div className={styles.ResponsiveIcon}><span><FiHeart className={styles.Ricon}/></span></div>
        <div className={styles.ResponsiveIcon}><Link  style={{textDecoration: "none"}} to="/Profile"><span><BiUserCircle className={styles.Ricone}/></span></ Link></div>
    </div>
  )  
}
