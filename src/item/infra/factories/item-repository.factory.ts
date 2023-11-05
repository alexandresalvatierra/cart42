import { ItemRepository } from '../../domain/repositories/item.repository'
import { ItemMongoRepository } from '../repositories/mongo/item-mongo.repository'

export const makeItemRepositoryFactory = (): ItemRepository => {
  return new ItemMongoRepository()
}
