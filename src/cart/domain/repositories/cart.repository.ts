import { CartEntity } from '../entities/cart.entity'
import {
  CreateRepository,
  FindAllRepository,
  FindOneRepository,
} from '../../../core/domain/repositories'

export interface CartRepository
  extends CreateRepository<CartEntity>,
    FindAllRepository<CartEntity>,
    FindOneRepository<CartEntity> {
  create(entity: CartEntity): Promise<CartEntity | false>

  findAll(): Promise<CartEntity[] | false>

  findOne(id: string): Promise<CartEntity | false>
}
