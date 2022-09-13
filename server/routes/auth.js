import { json, Router } from "express";
import { register, login, check } from "../controllers/authController.js";
const router = new Router()

// Registration
router.post('/register', register)


// Login
router.post('/login', login)




// Get/Check
router.get('/check', check)


export default router