const { Router } = require('express');
const { userRouter } = require("./userRouter.js")
const { User } = require("../../db")
// const { encrypt, compare } = require('../helpers/bcrypt');
const { Op } = require("sequelize");
// const { log } = require('console');


const router = Router();

// router.use('/', userRouter)
// router.use("/", userRouter)


router.post("/regis", async (req, res) => {
    try {
      const { name, email, password} = req.body;
      console.log(name);
        
    //   if (!name || !password || !email) return res.json({ msg: 'Missing required fields' });

      await User.create({name, email, password} );
      return res.json({ msg: `User create succesfully` });
    } catch (error) {
      return res.json({ msg: `Error 404 - ${error.msg}` });
    }
  });


module.exports = router;