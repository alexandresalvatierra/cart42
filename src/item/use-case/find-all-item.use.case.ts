import { UseCase } from 'src/core/use-case/use-case'
import { ItemRepository } from '../domain/repositories/item.repository'

export type FindAllItemResponse = {
  id: string
  name: string
  price: number
  quantity: number
}

export class FindAllItemUseCase implements UseCase {
  constructor(private readonly itemRepository: ItemRepository) {}

  async perform(): Promise<FindAllItemResponse[] | false> {
    const itemsEntity = await this.itemRepository.findAll()
    if (itemsEntity) {
      return itemsEntity.map((item) => ({
        id: item.id,
        name: item.props.name,
        price: item.props.price,
        quantity: item.props.quantity,
      }))
    } else {
      return false
    }
  }
}
