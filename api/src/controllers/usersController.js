const { User } = require('../../db')
// const { encrypt, compare } = require('../helpers/bcrypt');
const { Op } = require("sequelize");


//   const postUsers = async (req, res) => {
//     const infoUser = {}
//     const regexName = /^([a-zA-Z ]+)$/i;
//     const regexPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
//     const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
   
//     try {
//       const { name, lastname, email, password} = req.body;
  
//       if (!name || !lastname || !password || !email) return res.json({ msg: 'Missing required fields' });
  
  
//       if (email && email.length > 0 && email != "") {
//         if (regexEmail.test(email)) {
//           const userBD = await User.findOne({ where: { email: `${email}` } });
//           if (userBD) {
//             return res.json({ msg: 'The email already exists' });
//           } else {
//             infoUser.email = `${email}`
//           }
//         }
//       }
  
//       if (name && name.length > 0 && name != "") {
//         if (regexName.test(name)) {
//           infoUser.name = `${name}`
//         } else {
//           return res.json({ msg: 'The name is invalid' });
//         }
//       }
  
//       if (lastname && lastname.length > 0 && lastname != "") {
//         if (regexName.test(lastname)) {
//           infoUser.lastname = `${lastname}`
//         } else {
//           return res.json({ msg: 'The lastname is invalid' });
//         }
//       }
  
//       if (password && password.length > 0 && password != "") {
//         if (regexPassword.test(password)) {
//           const passwordHash = await encrypt(password);
//           infoUser.password = `${passwordHash}`
//         } else {
//           return res.json({ msg: 'The password is invalid' });
//         }
//       }
  
//       await User.create({
//         name: name,
//         lastname: lastname,
//         password: infoUser.password,
//         email: email,
//       });
//       return res.json({ msg: `User create succesfully` });
//     } catch (error) {
//       return res.json({ msg: `Error 404 - ${error}` });
//     }
//   };

const postUsers = async (req, res) => {
   
    try {
      const { name, email, password} = req.body;
  
      if (!name || !password || !email) return res.json({ msg: 'Missing required fields' });

      await User.create({
        name: name,
        password: password,
        email: email,
      });
      return res.json({ msg: `User create succesfully` });
    } catch (error) {
      return res.json({ msg: `Error 404 - ${error.msg}` });
    }
  };


  module.exports = {
  postUsers,
  }