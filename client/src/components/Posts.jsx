import React from 'react';
import styles from "../stylesheets/Posts.module.css";
import {FaRegComment } from "react-icons/fa"
import {BsSave2 } from "react-icons/bs"
import {FiHeart, FiSend } from "react-icons/fi"
import { AiTwotoneHeart } from "react-icons/ai"
import { useState } from "react";
import { FcLike } from "react-icons/fc"

export const Posts = () => {
    const [like, setLike] = useState(99)
    const [isLiked, setIsLiked] = useState(true)

    const liked = () => { 
        if (like === 99) { 
            setLike(100)
            setIsLiked(!isLiked)
        } else {
            setLike(99)
            setIsLiked(!isLiked)
        }
    }

  return (
    <div className={styles.ContainerPost}>
        <div className={styles.ContainerHeader}>
            <div className={styles.ContainerImg}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMDhSEs5xCFP41FawGvDnYYjQdzDhSMVlhbAWp_Pa&s" alt="" />
            </div>
            <div className={styles.ContainerData}>
                    <div  className={styles.name}><span>Cristina CFK</span></div>
                    <div  className={styles.place}><span>Nuñez, ciudad de Buenos Aires</span></div> 
            </div>
            <div className={styles.ContainerDesplegable}>
                <span>. . .</span>
            </div>
        </div>
        <div className={styles.ContainerPhoto}>
            <img src="https://media.istockphoto.com/id/150638671/es/foto/esquiador-de-esqu%C3%AD-en-pistas-nival.jpg?s=612x612&w=0&k=20&c=AzR2BhnHGWaFpP3TzKnO6zvUYOul2Z7NAqBIhUvpTbs=" alt="" />
        </div>
        <div className={styles.ContainerIcons}>
                <div className={styles.ContainerIconsIzq}>
                     <div onClick={()=> liked()}>{isLiked?<FiHeart />:<FcLike />}</div>
                    <div><FaRegComment /></div>
                    <div><FiSend /></div>
                 </div>
                 <div className={styles.ContainerIconsDer}>
                    <div >
                          <BsSave2 />
                    </div>
                 </div>    
        </div>
         <div className={styles.ContainerMG}>
            <div><span><AiTwotoneHeart style={{fontSize: "16px"}}/> {like} Likes</span></div>
         </div>



        <div className={styles.ContainerComments}>
           <div className={styles.NumberPosts}>
            <div className={styles.CommentsName}>
                <span>Franco Chaparro</span>
            </div>
            <div>
                <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deserunt magnam natus, nobis quibusdam porro veritatis aut debitis dolores dolorum in doloremque quidem iste ipsa, saepe explicabo eum ratione cum.
                </span>
            </div>
           </div>
        </div>
    </div>
  )
}
