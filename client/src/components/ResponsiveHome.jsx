import React, {useState, useEffect} from 'react';
import styles from "../stylesheets/Home.module.css";
import { Posts } from "./Posts";
import Historys from './Historys';


export const ResponsiveHome = () => {




  return (
    <div>
  <Historys />
  <Posts img={"https://media.istockphoto.com/id/150638671/es/foto/esquiador-de-esqu%C3%AD-en-pistas-nival.jpg?s=612x612&w=0&k=20&c=AzR2BhnHGWaFpP3TzKnO6zvUYOul2Z7NAqBIhUvpTbs="}/>
  <Posts img={"https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg"}/>
   <Posts img={"https://www.hospitalveterinariglories.com/wp-content/uploads/2022/11/25-11-22-X-datos-increi%CC%81bles-sobre-los-caballos.jpg"}/>
    <br />
    {/* <br />
    <br />
    <br /> */}
</div> 
  )
}



