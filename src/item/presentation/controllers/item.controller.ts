import { Request, Response } from 'express'
import { makeItemRepositoryFactory } from '../../infra/factories/item-repository.factory'
import {
  CreateItemUseCase,
  FindAllItemUseCase,
  FindOneItemUseCase,
  UpdateItemUseCase,
  DeleteItemUseCase,
} from '../../use-case/'

export class ItemController {
  async create(req: Request, res: Response) {
    const { name, price, quantity } = req.body
    const itemRepository = makeItemRepositoryFactory()
    const createItemUseCase = new CreateItemUseCase(itemRepository)

    const result = await createItemUseCase.perform({
      name,
      price,
      quantity,
    })
    if (result) {
      res.status(201).send(result)
    } else {
      res.status(200).send({ error: true, message: 'Item can not created' })
    }
  }

  async index(req: Request, res: Response) {
    const itemRepository = makeItemRepositoryFactory()
    const findAllItemUseCase = new FindAllItemUseCase(itemRepository)

    const result = await findAllItemUseCase.perform()
    if (result) {
      res.status(200).send(result)
    } else {
      res.status(200).send({ error: true, message: 'Items can not listed' })
    }
  }

  async show(req: Request, res: Response) {
    const { id } = req.params
    const itemRepository = makeItemRepositoryFactory()
    const findOneItemUseCase = new FindOneItemUseCase(itemRepository)

    const result = await findOneItemUseCase.perform(id)
    if (result) {
      res.status(200).send(result)
    } else {
      res.status(200).send({ error: true, message: 'Item can not found' })
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { name, price, quantity } = req.body
    const itemRepository = makeItemRepositoryFactory()
    const updateItemUseCase = new UpdateItemUseCase(itemRepository)

    const result = await updateItemUseCase.perform({
      id,
      name,
      price,
      quantity,
    })
    if (result) {
      res.status(200).send(result)
    } else {
      res.status(200).send({ error: true, message: 'Item can not updated' })
    }
  }

  async destroy(req: Request, res: Response) {
    const { id } = req.params
    const itemRepository = makeItemRepositoryFactory()
    const deleteItemUseCase = new DeleteItemUseCase(itemRepository)

    const result = await deleteItemUseCase.perform(id)
    if (result) {
      res.status(200).send({ message: 'Item success deleted' })
    } else {
      res.status(200).send({ error: true, message: 'Item can not deleted' })
    }
  }
}
