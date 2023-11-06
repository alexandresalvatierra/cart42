import { UseCase } from 'src/core/use-case/use-case'
import { ItemRepository } from '../domain/repositories/item.repository'
import { ItemEntity } from '../domain/entities/item.entity'

export type UpdateItemRequest = {
  id: string
  name: string
  price: number
  quantity: number
}

export type UpdateItemResponse = {
  id: string
  name: string
  price: number
  quantity: number
  updatedAt?: Date
}

export class UpdateItemUseCase implements UseCase {
  constructor(private readonly itemRepository: ItemRepository) {}

  async perform(
    request: UpdateItemRequest,
  ): Promise<UpdateItemResponse | false> {
    const { id, name, price, quantity } = request
    const updatedAt = new Date()
    const itemEntity = ItemEntity.create(
      {
        name,
        price,
        quantity,
        updatedAt,
      },
      id,
    )
    const itemEntityUpdated = await this.itemRepository.update(itemEntity, id)
    if (itemEntityUpdated) {
      const id = itemEntityUpdated.id
      const { name, price, quantity, updatedAt } = itemEntityUpdated.props
      return { id, name, price, quantity, updatedAt }
    } else {
      return false
    }
  }
}
