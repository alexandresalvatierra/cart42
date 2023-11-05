import express from 'express'
import { CartController } from './presentation/controllers/cart.controller'
const router = express.Router()
const cartController = new CartController()

router.get('/', cartController.index)
router.post('/', cartController.create)

export default router
