const express = require('express');
const AuthController = require('../controllers/Auth.js');

const api = express.Router();

api.post("/registro", AuthController.Registrar);
api.post("/login", AuthController.Login);

module.exports = api;
