import React, {useState} from 'react';
import styles from "../stylesheets/Register.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { userRegister } from "../Redux/actions";
import swal from "sweetalert";

export const Register = () => {
  // let users = useSelector((state) => state.emails.data || [])
  // let emails = users.map(e => e.email)
  // console.log(emails);


  const navigate = useNavigate();
  const regexName = /^([a-zA-Z ]+)$/i;
  const regexPassword = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{1,12}$/
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const dispatch = useDispatch();

  const [input, setInput] = useState({
      name: "",
      email: "",
      password: "",
      username: "",
  });


  function handleChange(e) {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    });
};


function handleSubmit(e) {
    e.preventDefault();

    if (!input.name || !input.password || !input.email) {
        return swal("Invalid", "Missing required fields!", "error");
    }

    if (input.email && input.email.length > 0 && input.email !== "") {
        if (!regexEmail.test(input.email)) {
            return swal("Invalid","Email invalid", "error")
        }
      }

      if (input.username && input.username.length > 0 && input.username !== "") {
        if (!regexName.test(input.username)) {
            return swal("Invalid","Name invalid", "error")
        }
      }
  
      if (input.password && input.password.length > 0 && input.password !== "") {
        if (!regexPassword.test(input.password)) {
            return swal("Invalid","Password invalid require 1number", "error")
        }
      }

    //   if (emails.includes(input.email)) {
    //     return swal("Invalid",'Email already exists', "error")
    // }


        dispatch(userRegister(input));
        swal("success",'User created successfully', "success")
        setInput({
            name: "",
            email: "",
            password: "",
            username: "",
        });
        navigate("/Login")
      }


  return (
    <div className={styles.ContainerAll}>
        <div className={styles.ContainerHeader}>
          <div className={styles.ContainerHeaderTop}>
            <span>Instagram</span>
          </div>
          <div className={styles.ContainerHeaderBot}>
            <div>
                <span>Regístrate para ver fotos y vídeos</span> <span style={{paddingLeft: "70px"}}>de tus amigos.</span>
            </div>
            <div className={styles.ContainerBtn}>
                <button className={styles.btn}>Iniciar Session con facebook</button>
            </div>
            </div>
        </div>

        <div className={styles.ContainerForm}>
              <div className={styles.ContainerFormTop}>
                  <form onSubmit={e => handleSubmit(e)} action="">
                      <input name='email' value={input.email}  onChange={e => handleChange(e)} type="email" placeholder='Correo Electronico'/>
                      <input  name='name' value={input.name}  onChange={e => handleChange(e)} type="text" placeholder='Nombre Completo'/>
                      <input  name='username' value={input.username}  onChange={e => handleChange(e)} type="text" placeholder='Nombre de Usuario'/>
                      <input  name='password' value={input.password}  onChange={e => handleChange(e)} type="password" placeholder='Contraseña'/>
                      <div className={styles.ContainerFormMid}><span>Al registrarte, aceptas nuestras Condiciones, nuestra Política de privacidad y nuestra Política de cookies.</span></div>
                      <div className={styles.ContainerFormBot}>
                          <button type='submit' className={styles.btn2}>Registrarse</button>
                      </div>
                  </form>
              </div>
        </div>


        <div className={styles.ContainerFooter}>   
        <div className={styles.FooterTop}><span>¿Tienes una cuenta? <Link to={"/Login"}><span>Entrar</span></Link></span></div>
                <div className={styles.FooterBot}>
                  <div className={styles.ContainerBanner}> <img src="https://es.logodownload.org/wp-content/uploads/2019/06/disponible-en-google-play-badge-1.png" alt="Google" /> </div>
                  <div className={styles.ContainerBanner}><img src="https://www.rccc.eu/cacheCCC/images/microsoft.png" alt="Microsoft" /> </div>
                </div>
        </div>
    </div>
  )
}
