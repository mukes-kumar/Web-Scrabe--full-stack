const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const endpoints = require("../utils/apiEndpoints");

router.post(endpoints.REGISTER, authController.register);
router.post(endpoints.LOGIN, authController.login);

module.exports = router;
