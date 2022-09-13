import { json, Router } from "express";
import { register, login, check } from "../controllers/authController.js";
const router = new Router()

// Registration
router.post('/register', register)


// Login
router.post('/register', register)




// Get/Check
router.get('/register', register)


export default router