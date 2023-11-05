import { Entity } from '../../../core/domain/entities/entity'

type CartItemProps = {
  itemId: string
  quantity: number
  discounts: number
  taxes: number
  createdAt: Date
}

export class CartItemEntity extends Entity<CartItemProps> {
  static create(props: CartItemProps, id?: string) {
    const cartItemEntity = new CartItemEntity(props, id)

    return cartItemEntity
  }
}
