import { CartEntity } from '../entities/cart.entity'
import { CreateRepository } from '../../../core/domain/repositories'

export interface CartRepository extends CreateRepository<CartEntity> {
  create(entity: CartEntity): Promise<CartEntity | false>
}
