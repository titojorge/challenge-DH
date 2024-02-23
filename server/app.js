/**------CONFIGURACIONES------*/
const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors')
const aspiranteRouter = require('./src/routes/api/aspirantes')
const profesionRouter = require('./src/routes/api/profesiones')
const dotenv = require('dotenv')


/**------METODOS DE APLICACION GLOBAL------*/
app.use(cors());
app.use(express.static(path.join(__dirname, "../server/public")));
app.use(express.json());
/*Configuracion de variable de entorno*/
dotenv.config()
const PORT = process.env.PORT

/**------RUTAS------*/
app.use('/', aspiranteRouter)

app.use('/', profesionRouter)

app.listen(PORT, () => {
  console.log("Success puerto " + PORT );
});