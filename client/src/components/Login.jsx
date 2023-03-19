import React, {useState, useEffect} from 'react';
import styles from "../stylesheets/Login.module.css";
import hola from "../images/hola.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch }  from 'react-redux';
import swal from "sweetalert";
import { userLogin, UserActive, postUsersGoogle, loginGoogle } from "../Redux/actions";
import jwt_decode from "jwt-decode";

export const Login = () => { 

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
    handleResize(); // llama a la función de manejo de tamaño inicialmente
    return () => window.removeEventListener("resize", handleResize);
  }, []);





  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [example, setExample] = useState(false)

  const [input, setInput] = useState({
      email: "",
      password: "",
  });

  const [infoGoogle, SetInfoGoogle] = useState({
      email: "",
      lastname: "",
      name: "",
      username :"",
      image: "",
  })

  function handleChange(e) {
      setInput({
          ...input,
          [e.target.name]: e.target.value
      });
  };


  const viewAlert = async  () => {
    let hola = await dispatch(postUsersGoogle(infoGoogle));
    
    const email = {
      email : infoGoogle.email
    }
    console.log(infoGoogle.image);
     console.log(email, "mail");
     const usuario = await dispatch(loginGoogle(email))


     if (usuario.success) {
              dispatch(UserActive(usuario))
              setTimeout( ()=> {
                  navigate("/Profile")
          }, 800)

      } else { 
          return swal("User Banned", "your account has been suspended", "error");
      }
}






  function HandleCallbackResponse(response) {
    var userObject = jwt_decode(response.credential);  
    SetInfoGoogle({ email: userObject.email,
      image: userObject.picture,
    lastname: userObject.family_name,
    name: userObject.given_name,
    username: userObject.name
    }
    )     
    swal({
        title: "Iniciar sesion con mi cuenta de Google",
        text: "Al iniciar sesion das permiso a de acceder a tus datos como nombre, correo e imagen de perfil",
        icon: "warning",
        buttons: ["No", "Si"]
      }).then( (respuesta) => {
      if(respuesta){
        setExample(true)
      }
    })
   
}

useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
        client_id: "794040187269-eq4bn5bv7ivak9pqo0p9dajl2ao35e7p.apps.googleusercontent.com",
        callback: HandleCallbackResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" },
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);




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
<div className={styles.container}>


        <div className={styles.ContainerIMG}> 
              <img src={hola} alt="imgInstagram" />
        </div>

        <div className={styles.ContainerForm}>
              <div className={styles.Title}><span>Instagram</span></div>
              <div className={styles.Form}>
                <div className={styles.FormDiv}>
                  <form>
                      <input type="text" placeholder='Enter email'/>
                      <input type="password" placeholder='password' />
                     <div className={styles.ContainerBtn}><button type='submit' className={styles.btn}>Entrar</button></div> 
                  </form>
                  </div>  
              </div>
  


              <div className={styles.Google}>
                <div className={styles.top}><span><div id="signInDiv"></div></span> </div>
                <div className={styles.bot}><span>¿Has olvidado la contraseña?</span> </div>
              </div>


              <div className={styles.Footer}>
                <div className={styles.FooterTop}>
                { example && infoGoogle.name && infoGoogle.email && infoGoogle.lastname ? <div onClick={viewAlert()}><strong>Ingresando...</strong></div>
                   :  <span>Descarga la aplicacion.</span>
                 }
                  </div>
                <div className={styles.FooterBot}>
                  <div className={styles.ContainerBanner}> <img src="https://es.logodownload.org/wp-content/uploads/2019/06/disponible-en-google-play-badge-1.png" alt="Google" /> </div>
                  <div className={styles.ContainerBanner}><img src="https://www.rccc.eu/cacheCCC/images/microsoft.png" alt="Microsoft" /> </div>
                </div>
              </div>
           </div>
      
      
      
        </div>


  // : <div className={styles.ResponsiveDiv}>
  //     <div className={styles.ContainerForm}>
  //             <div className={styles.Title}><span>Instagram</span></div>
  //             <div className={styles.Form}>
  //               <div className={styles.FormDiv}>
  //                 <form  onSubmit={e => handleSubmit(e)}>
  //                     <input name='email' onChange={e => handleChange(e)} value={input.email} type="text" placeholder='Enter email'/>
  //                     <input  name='password' onChange={e => handleChange(e)} value={input.password} type="password" placeholder='password' />
  //                    <div className={styles.ContainerBtn}><button type='submit' className={styles.btn}>Entrar</button></div> 
  //                 </form>
  //                 </div>  
  //             </div>

  //             <div className={styles.Google}>
  //               <div className={styles.top}><span><div id="signInDiv"></div></span> </div>
  //               <div className={styles.bot}><span style={{color: "rgb(44, 44, 44)"}}>Dont have an account? <Link style={{textDecoration: "none"}} to={"/Register"}><span>Register</span></Link></span> </div>
  //             </div>

  //             <div className={styles.Footer}>
  //               <div className={styles.FooterTop}>
  //              { example && infoGoogle.name && infoGoogle.email && infoGoogle.lastname ? <div onClick={viewAlert()}><strong>Ingresando...</strong></div>
  //               :  <span>Descarga la aplicacion.</span>
                  
  //               }
  //                 </div>
  //               <div className={styles.FooterBot}>
  //                 <div className={styles.ContainerBanner}> <img src="https://es.logodownload.org/wp-content/uploads/2019/06/disponible-en-google-play-badge-1.png" alt="Google" /> </div>
  //                 <div className={styles.ContainerBanner}><img src="https://www.rccc.eu/cacheCCC/images/microsoft.png" alt="Microsoft" /> </div>
  //               </div>
  //             </div>
  //       </div>
  //    </div>


    
   
  )
}

