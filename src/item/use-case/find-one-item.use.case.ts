import { UseCase } from 'src/core/use-case/use-case'
import { ItemRepository } from '../domain/repositories/item.repository'

export type FindOneItemResponse = {
  id: string
  name: string
  price: number
  quantity: number
}

export class FindOneItemUseCase implements UseCase {
  constructor(private readonly itemRepository: ItemRepository) {}

  async perform(id: string): Promise<FindOneItemResponse | false> {
    const itemEntity = await this.itemRepository.findOne(id)
    if (itemEntity) {
      return {
        id: itemEntity.id,
        name: itemEntity.props.name,
        price: itemEntity.props.price,
        quantity: itemEntity.props.quantity,
      }
    } else {
      return false
    }
  }
}
