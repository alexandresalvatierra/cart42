import { UseCase } from 'src/core/use-case/use-case'
import { ItemRepository } from '../domain/repositories/item.repository'
import { ItemEntity } from '../domain/entities/item.entity'

export type CreateItemRequest = {
  name: string
  price: number
  quantity: number
}

export type CreateItemResponse = {
  id: string
  name: string
  price: number
  quantity: number
  createdAt?: Date
}

export class CreateItemUseCase implements UseCase {
  constructor(private readonly itemRepository: ItemRepository) {}

  async perform(
    request: CreateItemRequest,
  ): Promise<CreateItemResponse | false> {
    const { name, price, quantity } = request
    const itemEntity = ItemEntity.create({
      name,
      price,
      quantity,
    })
    const itemEntityCreated = await this.itemRepository.create(itemEntity)
    if (itemEntityCreated) {
      const id = itemEntityCreated.id
      const { name, price, quantity, createdAt } = itemEntityCreated.props
      return { id, name, price, quantity, createdAt }
    } else {
      return false
    }
  }
}
