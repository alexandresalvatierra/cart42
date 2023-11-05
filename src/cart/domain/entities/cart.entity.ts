import { Entity } from '../../../core/domain/entities/entity'

type CartProps = {
  quantity?: number
  subtotal?: number
  discounts?: number
  taxes?: number
  total?: number
  abandonedAt: Date
  createdAt: Date
}

export class CartEntity extends Entity<CartProps> {
  static create(props: CartProps, id?: string) {
    const cartEntity = new CartEntity(props, id)

    return cartEntity
  }
}
