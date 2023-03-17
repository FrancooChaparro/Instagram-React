const { encrypt, compare } = require('../helpers/bcrypt');
const { User } = require('../../db')
const { Op } = require("sequelize");


  const postUsers = async (req, res) => {
    const infoUser = {}
    const regexName = /^([a-zA-Z ]+)$/i;
    // const regexPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
    const regexPassword = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{1,12}$/
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
   
    try {
      const { name, email, password} = req.body;
  
      if (!name || !password || !email) return res.json({ msg: 'Missing required fields' });
  
  
      if (email && email.length > 0 && email != "") {
        if (regexEmail.test(email)) {
          const userBD = await User.findOne({ where: { email: `${email}` } });
          if (userBD) {
            return res.json({ msg: 'The email already exists' });
          } else {
            infoUser.email = `${email}`
          }
        }
      }
  
      if (name && name.length > 0 && name != "") {
        if (regexName.test(name)) {
          infoUser.name = `${name}`
        } else {
          return res.json({ msg: 'The name is invalid' });
        }
      }
  
      if (password && password.length > 0 && password != "") {
        if (regexPassword.test(password)) {
          const passwordHash = await encrypt(password);
          infoUser.password = `${passwordHash}`
        } else {
          return res.json({ msg: 'The password is invalid' });
        }
      }
  
      await User.create({
        name: name,
        password: infoUser.password,
        email: email,
      });
      return res.json({ msg: `User create succesfully` });
    } catch (error) {
      return res.json({ msg: `Error 404 - ${error}` });
    }
  }

  const postUserGoogle = async (req, res) => { 
    try {
      const { name, lastname, email, image} = req.body;
      if (!name || !lastname || !email) return res.json({ msg: 'Missing required fields', success: false  });
  
      // const userBD = await User.findOne({ where: { email: `${email}` } });
      // if (userBD) {
      //   return res.json({ msg: 'The email already exists', success: false  });
      // }
       const Username = `${name} ${lastname}`
      await User.create({
        name: Username,
        email: email,
        // image: image,
        password: "XDRWQDFF11asedfa123"
      });

      return res.json({ msg: `User create succesfully`, success: true });
  
    } catch (error) {
       return res.json({ msg: `Error 404 - ${error}` });
    }
  }

  const loginUser = async (req, res) => { 
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email: `${email}` } });
      if (!user) return res.json({ msg: 'User not found',success: false, });
  
      const checkPassword = await compare(password, user.password);
  
      if (checkPassword) {
        res.status(200).send({
          data: user,
          success: true,
        });
      }
      if (!checkPassword) {
        return res.json({ msg: 'Invalid password', success: false, });
  
  
      }
    } catch (error) {
      return res.json({ msg: `Error 404 - ${error}` });
    }
  }


  const loginGoogle = async (req, res) => { 
    try {
      const { email } = req.body;
      const user = await User.findOne({ where: { email: `${email}` } });
      
        res.status(200).send({
          data: user,
          success: true,
        });
      
  
    } catch (error) {
      return res.json({ msg: `Error 404 - ${error}` });s
    }
  }

  module.exports = {
  postUsers,
  postUserGoogle, 
  loginUser,
  loginGoogle 
  }