const { Router } = require('express');
const { postUsers, postUserGoogle, loginUser,loginGoogle } = require("../controllers/usersController")

const userRouter = Router()

//////////////////////////////// CREAR USUARIO /////////////////////////////////////// 
userRouter.post('/register', postUsers) 
userRouter.post('/google', postUserGoogle) 

//////////////////////////////// INICIAR SESSION  /////////////////////////////////////// 

userRouter.post('/login', loginUser)
userRouter.post("/loginGoogle", loginGoogle)


module.exports = {
    userRouter
}