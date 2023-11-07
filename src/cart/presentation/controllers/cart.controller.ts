import { Request, Response } from 'express'
import { makeCartRepositoryFactory } from '../../infra/factories/cart-repository.factory'
import {
  CreateCartUseCase,
  FindAllCartUseCase,
  FindOneCartUseCase,
  DeleteCartUseCase,
} from '../../use-case/'

export class CartController {
  async create(req: Request, res: Response) {
    const { items } = req.body
    const cartRepository = makeCartRepositoryFactory()
    const createCartUseCase = new CreateCartUseCase(cartRepository)

    const result = await createCartUseCase.perform({
      items,
    })
    if (result) {
      res.status(201).send(result)
    } else {
      res.status(200).send({ error: true, message: 'Cart can not created' })
    }
  }

  async index(req: Request, res: Response) {
    const cartRepository = makeCartRepositoryFactory()
    const findAllItemUseCase = new FindAllCartUseCase(cartRepository)

    const result = await findAllItemUseCase.perform()
    if (result) {
      res.status(200).send(result)
    } else {
      res.status(200).send({ error: true, message: 'Carts can not listed' })
    }
  }

  async show(req: Request, res: Response) {
    const { id } = req.params
    const cartRepository = makeCartRepositoryFactory()
    const findOneCartUseCase = new FindOneCartUseCase(cartRepository)

    const result = await findOneCartUseCase.perform(id)
    if (result) {
      res.status(200).send(result)
    } else {
      res.status(200).send({ error: true, message: 'Cart can not found' })
    }
  }

  async destroy(req: Request, res: Response) {
    const { id } = req.params
    const cartRepository = makeCartRepositoryFactory()

    const deleteCartUseCase = new DeleteCartUseCase(cartRepository)

    const result = await deleteCartUseCase.perform(id)
    if (result) {
      res.status(200).send({ message: 'Cart success abandoned' })
    } else {
      res.status(200).send({ error: true, message: 'Cart can not abandoned' })
    }
  }
}
