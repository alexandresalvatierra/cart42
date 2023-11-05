import { CartEntity } from '../../domain/entities/cart.entity'
import { CartRepository as CartDbRepository } from '../../domain/repositories/cart.repository'

export class CartRepository implements CartDbRepository {
  create(cartEntity: CartEntity): Promise<CartEntity | false> {
    throw new Error('Method not implemented.')
  }
}
