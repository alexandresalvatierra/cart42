import { Request, Response } from 'express'
import { makeItemRepositoryFactory } from '../../infra/factories/item-repository.factory'
import { CreateItemUseCase } from '../../use-case/create-item.use.case'
import { FindAllItemUseCase } from '../../use-case/find-all-item.use.case'
import { FindOneItemUseCase } from '../../use-case/find-one-item.use.case'

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

    res.json('updateee')
  }
}
