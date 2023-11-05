import express from 'express'
import cart from './cart/cart.module'
import item from './item/item.module'
const router = express.Router()

router.use('/carts', cart)
router.use('/items', item)

export default router
