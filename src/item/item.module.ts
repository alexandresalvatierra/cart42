import express from 'express'
import { ItemController } from './presentation/controllers/item.controller'
const router = express.Router()
const itemController = new ItemController()

router.post('/', itemController.create)
router.get('/', itemController.index)
router.get('/:id', itemController.show)
router.put('/:id', itemController.update)
router.delete('/:id', itemController.destroy)

export default router
