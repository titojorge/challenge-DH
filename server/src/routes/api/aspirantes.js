const express = require("express");
const router = express.Router();
const aspirantesController = require("../../controllers/api/aspirantesController");

router.get("/aspirantes", aspirantesController.list);
// router.get('/categories/:id', aspirantesController.show);

module.exports = router;
