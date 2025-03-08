const express = require("express")
const route = express.Router();
const userController = require("../controller/userController")
route.post("/myflights", userController.userDisplay)
route.post("/bookedflight", userController.dataSave)

module.exports = route