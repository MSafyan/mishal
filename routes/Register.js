//defining routes
import express from 'express';
import { createRegister,Login } from '../controllers/Register.js';

const router = express.Router();

router.post("/", createRegister);
router.post("/signin", Login);


export default router;

