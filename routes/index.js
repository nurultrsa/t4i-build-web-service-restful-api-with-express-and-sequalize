import express from "express"
import { getUsers, Register, Login, Logout } from "../controllers/Users.js"
import { Index, Store, Update, Delete } from "../controllers/Animals.js"
import { verifyToken } from "../middleware/VerifyToken.js"
import { refreshToken } from "../controllers/RefreshToken.js"

const router = express.Router()

//Users
router.get('/users', verifyToken, getUsers)
router.post('/users', Register)
router.post('/login', Login)
router.get('/token', refreshToken)
router.delete('/logout', Logout)


//Animals
router.get('/animals', Index)
router.post('/animals', Store)
router.put('/animals/:id', Update)
router.delete('/animals/:id', Delete)

export default router