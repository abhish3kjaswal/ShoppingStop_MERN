import express from 'express'
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
} from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

//createOrder
router.post('/', protect, addOrderItems)

//get my orders
router.get('/myorders', protect, getMyOrders)
//get Orderby id
router.get('/:id', protect, getOrderById)

//payment
router.put('/:id/pay', protect, updateOrderToPaid)

export default router
