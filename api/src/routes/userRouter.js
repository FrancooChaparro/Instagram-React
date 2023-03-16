const { Router } = require('express');
const { postUsers } = require("../controllers/usersController")

const userRouter = Router()

//////////////////////////////// CREAR USUARIO /////////////////////////////////////// 
userRouter.post('/register', postUsers) 