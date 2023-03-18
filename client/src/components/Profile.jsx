import React, { useState, useEffect } from 'react';
import styles from "../stylesheets/Profile.module.css";
import { VscSettingsGear } from "react-icons/vsc";
import { BsPostcard } from "react-icons/bs";
import { FaRegCaretSquareLeft } from "react-icons/fa";
import { BsSave2 } from "react-icons/bs";
import { RiFolderUserLine } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai"
import { Link } from "react-router-dom";
import { Posts } from "./Posts";
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(true);
  const userActive = JSON.parse(localStorage.getItem("USUARIO")) || []

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 450) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // llama a la función de manejo de tamaño inicialmente
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  function CerrarSes(e) {
    e.preventDefault();
    setTimeout(() => {
      // dispatch(deleteUserLocalStorage())
      window.localStorage.removeItem("USUARIO")
      navigate("/Login")
    }, 1300)
  }


  return (
    isMobile ?  <div className={styles.ContainerProfile}>
          <div className={styles.HeaderProfile}>
              <div className={styles.ContainerImg}>
                  <img src={userActive.image ? userActive.image : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80"} alt="" />
              </div>
              <div className={styles.ContainerData}>
                  <div className={styles.top}>
                    <div> <span>{userActive.name ? userActive.name : "Cristina Romero"}</span> </div>
                    <div><button style={{marginTop: "2px"}}> <strong><span style={{fontSize: "12px"}}>Editar Perfil</span></strong></button></div>
                    <div><VscSettingsGear onClick={(e)=> CerrarSes(e)} style={{marginTop: "13px",fontSize: "19px"}}/></div>
                  </div>
                  <div className={styles.mid}>
                    <div> <strong>1000</strong> posts</div>
                    <div> <strong>1000</strong> followers</div>
                    <div> <strong>1000</strong> following</div>
                  </div>
                  <div className={styles.bot}>
                     <div> <span className={styles.Subtitle}><strong>{userActive.username ? userActive.username : "Soy cristina"}</strong></span></div>
                     <div><span className={styles.hash}>#ReactJS #JavaScript #Nodejs</span> </div>
                  </div>
              </div>
          </div>
          <div className={styles.BodyProfile}>
                <div className={styles.BodyMenu}>
                    <div><span><BsPostcard />  POSTS</span></div>
                    <div><span><FaRegCaretSquareLeft />  IGTV</span></div>
                    <div><span><BsSave2 />  SAVED</span></div>
                    <div><span><RiFolderUserLine />  TAGGED</span></div>
                </div>
                <div className={styles.BodyPosts}>
                  <div className={styles.ImgCont}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" /></div>
                  <div className={styles.ImgCont}><img src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_640.jpg" alt="" /></div>
                  <div className={styles.ImgCont}><img src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                </div>
          </div>
    </div>

   : <div className={styles.ResponsiveContainer}>
       <div  className={styles.ResponsiveHeader}>
            <div  className={styles.ResponsiveHeaderTop}>
                <img src={userActive.image ? userActive.image : "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg"}  alt="" />
            </div>
            <div  className={styles.ResponsiveHeaderBot}>
                <div><span  style={{paddingLeft: "14px"}}>54</span><span>Posts</span></div>
                <div><span style={{paddingLeft: "14px"}}>852</span><span>Followers</span></div>
                <div><span style={{paddingLeft: "14px"}}>921</span><span>Following</span></div>
            </div>
       </div>
       <div  className={styles.ResponsiveData}>
            <div className={styles.ResponsiveDataTop}>
                  <div><span><strong>{userActive.name ? userActive.name : "Maria Teresa"}</strong></span></div>
                  <div><span>Big into hiking & Nature</span></div>
            </div>
            <div className={styles.ResponsiveDataBot}>
                  <div className={styles.ResponsiveDataBtn}><button className={styles.ResponsiveDataBtn1}>Edit Profile</button></div>
                  <div className={styles.ResponsiveDataIcon}><span><AiOutlineUserAdd  className={styles.Responsiveicon} /></span></div>
            </div>
       </div>
       <div  className={styles.ResponsiveContainerIcons}>
            <div><span><BsPostcard /></span></div>
            <div><span><FaRegCaretSquareLeft /> </span></div>
            <div><span><RiFolderUserLine /></span></div> 
       </div>
       <div  className={styles.ResponsiveContainerImg}>
            <div className={styles.ResponsiveAcople}>
                  <div  className={styles.ResponsivePost}><img src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_640.jpg" alt="" /></div>
                  <div className={styles.ResponsivePost}><img src="https://img.freepik.com/foto-gratis/paisaje-niebla-matutina-montanas-globos-aerostaticos-al-amanecer_335224-794.jpg" alt="" /></div>
                  <div className={styles.ResponsivePost}><img src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" alt="" /></div>
            </div>
            <div className={styles.ResponsiveAcople}>
                <div className={styles.ResponsivePost}><img src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_640.jpg" alt="" /></div>
                 <div className={styles.ResponsivePost}><img src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" alt="" /></div>
                <div className={styles.ResponsivePost}><img src="https://img.freepik.com/foto-gratis/paisaje-niebla-matutina-montanas-globos-aerostaticos-al-amanecer_335224-794.jpg" alt="" /></div>
            </div>
            <div className={styles.ResponsiveAcople}>
            <div  className={styles.ResponsivePost}><img src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_640.jpg" alt="" /></div>
                  <div className={styles.ResponsivePost}><img src="https://img.freepik.com/foto-gratis/paisaje-niebla-matutina-montanas-globos-aerostaticos-al-amanecer_335224-794.jpg" alt="" /></div>
                  <div className={styles.ResponsivePost}><img src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" alt="" /></div>
            </div>
       </div>
    </div>
  )
}
