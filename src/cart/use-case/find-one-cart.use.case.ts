import { UseCase } from 'src/core/use-case/use-case'
import { CartRepository } from '../domain/repositories/cart.repository'
import {
  FindAllCartItemDto,
  FindAllCartResponse,
} from './find-all-cart.use.case'

export type FindOneCartItemDto = {
  itemId: string
  name?: string
  price?: string
  quantity: number
  discounts: number
  taxes: number
}

export type FindOneCartResponse = {
  id: string
  quantity?: number
  subtotal?: number
  discounts?: number
  taxes?: number
  total?: number
  items: FindOneCartItemDto[] | []
}

export class FindOneCartUseCase implements UseCase {
  constructor(private readonly itemRepository: CartRepository) {}

  async perform(id: string): Promise<FindAllCartResponse | false> {
    const cartEntity = await this.itemRepository.findOne(id)

    if (cartEntity) {
      const { quantity, subtotal, discounts, taxes, items, total } =
        cartEntity.props
      const id = cartEntity.id
      const cartItemDto: FindAllCartItemDto[] = items.map((cartItem) => {
        const { itemId, name, price, quantity, discounts, taxes } =
          cartItem.props
        return {
          itemId,
          name,
          price,
          quantity,
          discounts,
          taxes,
        }
      })
      return {
        id,
        quantity,
        subtotal,
        discounts,
        taxes,
        total,
        items: cartItemDto,
      }
    } else {
      return false
    }
  }
}
