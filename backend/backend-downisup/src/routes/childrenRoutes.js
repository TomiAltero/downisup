const express = require("express");
const router = express.Router();
const childrensManagmentController = require("../controllers/childrens/childrensManagmentController.js");
const childrenForUser = require("../controllers/childrens/childrensManagmentController.js");
const verificarToken = require("../middlewars/authentification.js");

router.get("/profiles", verificarToken, childrenForUser.getChildrenForUser);
router.get('/children', verificarToken, childrensManagmentController.getChildren);

router.get("/", verificarToken, childrensManagmentController.getChildrenAndUser);

module.exports = router;
