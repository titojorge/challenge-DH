/**------CONFIGURACIONES------*/
const multer = require('multer'); // Multer, probando MULTER
const express = require("express");
const path = require("path");
const app = express();
const upload = multer ({ dest: './public/images/perfiles'})//PRUEBA MULTER
const cors = require('cors')
const aspiranteRouter = require('./src/routes/api/aspirantes')
const profesionRouter= require('./src/routes/api/profesiones')

/**------METODOS DE APLICACION GLOBAL------*/
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false })); // Formularios sean procesados
app.use(express.json());

/**------RUTAS------*/
app.use('/', aspiranteRouter)
app.use(profesionRouter)
app.listen(3000, () => {
  console.log("Success puerto 3000");
});