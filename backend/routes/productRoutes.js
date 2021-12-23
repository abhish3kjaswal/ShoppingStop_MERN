import express from 'express'
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/', getProducts)

//create product
router.post('/', protect, admin, createProduct)

router.get('/:id', getProductById)

//delete a product
router.delete('/:id', protect, admin, deleteProduct)

//Update a product
router.put('/:id', protect, admin, updateProduct)

export default router
