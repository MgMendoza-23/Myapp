import express from 'express';
import AuthController from '../controllers/Auth.js';
const AuthController = require('../controllers/Auth.js');
const api = express.Router();

api.post("/registro", AuthController.Registrar);
api.post("/login", AuthController.Login);

export default api;