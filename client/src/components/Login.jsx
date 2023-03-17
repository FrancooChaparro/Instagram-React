import React, {useState} from 'react';
import styles from "../stylesheets/Login.module.css";
import hola from "../images/hola.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch }  from 'react-redux';
import swal from "sweetalert";
import { userLogin, UserActive } from "../Redux/actions"

export const Login = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
      email: "",
      password: "",
  });

  const [infoGoogle, SetInfoGoogle] = useState({
      email: "",
      name: "",
      image: "",
  })

  function handleChange(e) {
      setInput({
          ...input,
          [e.target.name]: e.target.value
      });
  };




  

  async function handleSubmit(e) {
    e.preventDefault();
    if (!input.password || !input.email) {
        return swal("Invalid", "Missing required fields!", "error");
    }
    else {
        const response = await dispatch(userLogin(input));
        if (response.data.success) {
          console.log(response.data, "DATa");
          dispatch(UserActive(response.data))
          console.log(response.data.data, "User");
          setTimeout(() => {
              setInput({
                  email: "",
                  password: ""
              });
              navigate("/Profile")
          }, 1300)
    }
      else {
          return swal("Invalid", "Password invalid", "error");
      }

    }
}



  return (
    // <div className={styles.container}>
    //     <div className={styles.ContainerIMG}> 
    //           <img src={hola} alt="imgInstagram" />
    //     </div>
    //     <div className={styles.ContainerForm}>
    //           <div className={styles.Title}><span>Instagram</span></div>
    //           <div className={styles.Form}>
    //             <div className={styles.FormDiv}>
    //               <form>
    //                   <input type="text" placeholder='Enter email'/>
    //                   <input type="password" placeholder='password' />
    //                  <div className={styles.ContainerBtn}><button type='submit' className={styles.btn}>Entrar</button></div> 
    //               </form>
    //               </div>  
    //           </div>
    //           <div className={styles.Google}>
    //             <div className={styles.top}><span>Iniciar session con facebook</span> </div>
    //             <div className={styles.bot}><span>¿Has olvidado la contraseña?</span> </div>
    //           </div>
    //           <div className={styles.Footer}>
    //             <div className={styles.FooterTop}><span>Descarga la aplicacion.</span></div>
    //             <div className={styles.FooterBot}>
    //               <div className={styles.ContainerBanner}> <img src="https://es.logodownload.org/wp-content/uploads/2019/06/disponible-en-google-play-badge-1.png" alt="Google" /> </div>
    //               <div className={styles.ContainerBanner}><img src="https://www.rccc.eu/cacheCCC/images/microsoft.png" alt="Microsoft" /> </div>
    //             </div>
    //           </div>
    //     </div>
    // </div>
    // <div>
    <div className={styles.ResponsiveDiv}>
      <div className={styles.ContainerForm}>
              <div className={styles.Title}><span>Instagram</span></div>
              <div className={styles.Form}>
                <div className={styles.FormDiv}>
                  <form  onSubmit={e => handleSubmit(e)}>
                      <input name='email' onChange={e => handleChange(e)} value={input.email} type="text" placeholder='Enter email'/>
                      <input  name='password' onChange={e => handleChange(e)} value={input.password} type="password" placeholder='password' />
                     <div className={styles.ContainerBtn}><button type='submit' className={styles.btn}>Entrar</button></div> 
                  </form>
                  </div>  
              </div>

              <div className={styles.Google}>
                <div className={styles.top}><span>Iniciar session con facebook</span> </div>
                <div className={styles.bot}><span style={{color: "rgb(44, 44, 44)"}}>Dont have an account? <Link style={{textDecoration: "none"}} to={"/Register"}><span>Register</span></Link></span> </div>
              </div>

              <div className={styles.Footer}>
                <div className={styles.FooterTop}><span>Descarga la aplicacion.</span></div>
                <div className={styles.FooterBot}>
                  <div className={styles.ContainerBanner}> <img src="https://es.logodownload.org/wp-content/uploads/2019/06/disponible-en-google-play-badge-1.png" alt="Google" /> </div>
                  <div className={styles.ContainerBanner}><img src="https://www.rccc.eu/cacheCCC/images/microsoft.png" alt="Microsoft" /> </div>
                </div>
              </div>
        </div>
     </div>
    
  )
}
