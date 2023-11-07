import { CartEntity } from '../entities/cart.entity'
import {
  CreateRepository,
  FindAllRepository,
  FindOneRepository,
  DeleteRepository,
} from '../../../core/domain/repositories'

export interface CartRepository
  extends CreateRepository<CartEntity>,
    FindAllRepository<CartEntity>,
    FindOneRepository<CartEntity>,
    DeleteRepository {
  create(entity: CartEntity): Promise<CartEntity | false>

  findAll(): Promise<CartEntity[] | false>

  findOne(id: string): Promise<CartEntity | false>

  delete(id: string): Promise<boolean>
}
