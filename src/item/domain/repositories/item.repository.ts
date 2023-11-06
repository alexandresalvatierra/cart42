import { ItemEntity } from '../entities/item.entity'
import {
  CreateRepository,
  FindAllRepository,
  FindOneRepository,
  UpdateRepository,
  DeleteRepository,
} from '../../../core/domain/repositories'

export interface ItemRepository
  extends CreateRepository<ItemEntity>,
    FindAllRepository<ItemEntity>,
    FindOneRepository<ItemEntity>,
    UpdateRepository<ItemEntity>,
    DeleteRepository {
  create(entity: ItemEntity): Promise<ItemEntity | false>

  findAll(): Promise<ItemEntity[] | false>

  findOne(id: string): Promise<ItemEntity | false>

  update(entity: ItemEntity, id: string): Promise<ItemEntity | false>

  delete(id: string): Promise<boolean>
}
