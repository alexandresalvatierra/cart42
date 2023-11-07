import { Entity } from '../../../core/domain/entities/entity'
import { CartItemEntity } from './cart-item.entity'

type CartProps = {
  quantity?: number
  subtotal?: number
  discounts?: number
  taxes?: number
  total?: number
  items: CartItemEntity[] | []
  abandonedAt?: Date
  createdAt?: Date
  updatedAt?: Date
}

export class CartEntity extends Entity<CartProps> {
  static create(props: CartProps, id?: string) {
    const cartEntity = new CartEntity(props, id)

    return cartEntity
  }
}
