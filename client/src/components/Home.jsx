import React, {useState, useEffect} from 'react';
import styles from "../stylesheets/Home.module.css";
import { MenuLateral } from "./MenuLateral";
import { Posts } from "./Posts";
import Historys from './Historys';

export const Home = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 450) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);




  return (
      <div className={styles.HomeContainer}>
    <div className={styles.HomeIzq}>
      <div style={{ width: "900px", paddingLeft: "40px" }}>
        <Historys />
        <Posts img={"https://media.istockphoto.com/id/150638671/es/foto/esquiador-de-esqu%C3%AD-en-pistas-nival.jpg?s=612x612&w=0&k=20&c=AzR2BhnHGWaFpP3TzKnO6zvUYOul2Z7NAqBIhUvpTbs="}/>
        <Posts img={"https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg"}/>
        <Posts img={"https://www.hospitalveterinariglories.com/wp-content/uploads/2022/11/25-11-22-X-datos-increi%CC%81bles-sobre-los-caballos.jpg"}/>
      </div>
    </div>
    <div className={styles.HomeDer}><MenuLateral /></div>
  </div>
  )
}