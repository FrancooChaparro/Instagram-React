// const express = require('express');
// const cors = require("cors");
// const { conn } = require("./db.js")

// const server = express()

//middlewares
// server.use(express.urlencoded({ extended: true }));
// server.use(express.json());
// server.use(cors());

//acceso a rutas
// server.use("/", UserRoutes);


//conexiones
// const { PORT } = process.env

// conn.sync({ force: true }).then(() => {
//     console.log("database coneccted!");

//     server.listen(PORT, () => {
//         console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
//     });
// });



const server = require('./src/app');
const { conn } = require('./db.js');
const { PORT } = process.env

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => { //CAMBIAR A {alter: true} CUANDO TERMINE DE CREAR TODO EL BACKEND
  server.listen(PORT, () => {
    console.log(`🚀 Server listening at ${PORT}`); // eslint-disable-line no-console
  });
}); 