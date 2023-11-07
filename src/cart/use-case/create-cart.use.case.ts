import { UseCase } from 'src/core/use-case/use-case'
import { CartRepository } from '../domain/repositories/cart.repository'
import { CartEntity } from '../domain/entities/cart.entity'
import { CartItemEntity } from '../domain/entities/cart-item.entity'

export type CreateCartItemDto = {
  itemId: string
  name?: string
  price?: string
  quantity: number
  discounts: number
  taxes: number
}

export type CreateCartRequest = {
  items: CreateCartItemDto[]
}

export type CreateCartResponse = {
  id: string
  quantity?: number
  subtotal?: number
  discounts?: number
  taxes?: number
  total?: number
  items: CreateCartItemDto[] | []
}

export class CreateCartUseCase implements UseCase {
  constructor(private readonly cartRepository: CartRepository) {}

  async perform(
    request: CreateCartRequest,
  ): Promise<CreateCartResponse | false> {
    const { items } = request
    const cartItemEntity = items.map((cartItem) => {
      const { itemId, quantity, discounts, taxes } = cartItem
      return CartItemEntity.create({
        itemId,
        quantity,
        discounts,
        taxes,
      })
    })
    const cartEntity = CartEntity.create({
      items: cartItemEntity,
    })

    const cartEntityCreated = await this.cartRepository.create(cartEntity)

    if (cartEntityCreated) {
      const { quantity, subtotal, discounts, taxes, items, total } =
        cartEntityCreated.props
      const id = cartEntityCreated.id
      const cartItemDto: CreateCartItemDto[] = items.map((cartItem) => {
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
