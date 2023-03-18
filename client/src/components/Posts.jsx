import React from 'react';
import styles from "../stylesheets/Posts.module.css";
import {FaRegComment } from "react-icons/fa"
import {BsSave2 } from "react-icons/bs"
import {FiHeart, FiSend } from "react-icons/fi"
import { AiTwotoneHeart } from "react-icons/ai"
import { useState } from "react";
import { FcLike } from "react-icons/fc"

export const Posts = ({ img }) => {
    const [like, setLike] = useState(99)
    const [isLiked, setIsLiked] = useState(true)
    const [comment, setComment] = useState("")
    const [tagged, setTagged] = useState(false)
    const [comento, setComento] = useState(true)

    const ComentInstagram = (e) => {
        setComment(e.target.value);
 
      }

    const liked = () => { 
        if (like === 99) { 
            setLike(100)
            setIsLiked(!isLiked)
        } else {
            setLike(99)
            setIsLiked(!isLiked)
        }
    }


    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            miFuncion()
        }
      };

function miFuncion() {
    setTagged(false);
    setComento(!comento)
}

  return (
    <div className={comento ? styles.ContainerPost : styles.ContainerPostConComment}>
        <div className={styles.ContainerHeader}>
            <div className={styles.ContainerImg}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMDhSEs5xCFP41FawGvDnYYjQdzDhSMVlhbAWp_Pa&s" alt="" />
            </div>
            <div className={styles.ContainerData}>
                    <div  className={styles.name}><span>Cristina Coria</span></div>
                    <div  className={styles.place}><span>Nuñez, ciudad de Buenos Aires</span></div> 
            </div>
            <div className={styles.ContainerDesplegable}>
                <span>. . .</span>
            </div>
        </div>



        <div className={styles.ContainerPhoto}>
            <img src={img} alt="" />
        </div>


        <div className={styles.ContainerIcons}>
                <div className={styles.ContainerIconsIzq}>
                     <div onClick={()=> liked()}>{isLiked?<FiHeart />:<FcLike />}</div>
                    <div onClick={()=>  setTagged(true)}><FaRegComment /></div>
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
           { comment.length > 0 && !tagged  &&  <div className={styles.NumberPosts}>
            <div className={styles.CommentsName}>
                <span>Franco Chaparro</span>
            </div>
            <div style={{paddingBottom: "5px"}}>
                <span >
                    {comment}
                </span>
            </div>
           </div> 
           }
           {tagged &&  <div className={styles.ResponsiveComments}>
                   <input  onChange={ComentInstagram} onKeyPress={handleKeyPress} type="text" placeholder='Escribe un comentario...' className={styles.ResponsiveInput} />
              </div>
            }
        </div>
    </div>
  )
}
