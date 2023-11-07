import { Entity } from '../../../core/domain/entities/entity'

type CartItemProps = {
  itemId: string
  name?: string
  price?: string
  quantity: number
  discounts: number
  taxes: number
  createdAt?: Date
  updatedAt?: Date
}

export class CartItemEntity extends Entity<CartItemProps> {
  static create(props: CartItemProps, id?: string) {
    const cartItemEntity = new CartItemEntity(props, id)

    return cartItemEntity
  }
}
