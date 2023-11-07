import { UseCase } from 'src/core/use-case/use-case'
import { CartRepository } from '../domain/repositories/cart.repository'

export type FindAllCartItemDto = {
  itemId: string
  name?: string
  price?: string
  quantity: number
  discounts: number
  taxes: number
}

export type FindAllCartResponse = {
  id: string
  quantity?: number
  subtotal?: number
  discounts?: number
  taxes?: number
  total?: number
  items: FindAllCartItemDto[] | []
}

export class FindAllCartUseCase implements UseCase {
  constructor(private readonly itemRepository: CartRepository) {}

  async perform(): Promise<FindAllCartResponse[] | false> {
    const cartsEntity = await this.itemRepository.findAll()

    if (cartsEntity) {
      return cartsEntity.map((cartEntity) => {
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
      })
    } else {
      return false
    }
  }
}
