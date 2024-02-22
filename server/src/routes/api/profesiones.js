const express = require("express");
const router = express.Router();
const profesionesController = require("../../controllers/api/profesionesController");


router.get('/profesiones', profesionesController.list )




module.exports= router