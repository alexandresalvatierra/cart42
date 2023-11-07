import { CartRepository } from '../../domain/repositories/cart.repository'
import { CartMongoRepository } from '../repositories/mongo/cart-mongo.repository'

export const makeCartRepositoryFactory = (): CartRepository => {
  return new CartMongoRepository()
}
