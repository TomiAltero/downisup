const express = require("express");
const router = express.Router();
const childrensManagmentController = require("../controllers/childrens/childrensManagmentController");
const childrenForUser = require("../controllers/childrens/childrensManagmentController.js");
const verificarToken = require("../middlewars/authentification");


router.get("/profiles", verificarToken, childrenForUser.getChildrenForUser);
router.post("/", verificarToken, childrensManagmentController.addChildren);

module.exports = router;
