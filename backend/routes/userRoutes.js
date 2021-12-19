import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUsers,
  getUserById,
  updateUser,
} from '../controllers/userController.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

//login
router.post('/login', authUser)

//register user
router.post('/', registerUser)

//get profile
router.get('/profile', protect, getUserProfile)

//update profile
router.put('/profile', protect, updateUserProfile)

//get all users --> Admin
router.get('/', protect, admin, getUsers)

//delete a user
router.delete('/:id', protect, admin, deleteUsers)

//get a user by id
router.get('/:id', protect, admin, getUserById)

//update a user
router.put('/:id', protect, admin, updateUser)

export default router
