import { ItemEntity } from '../../../domain/entities/item.entity'
import { ItemRepository } from '../../../domain/repositories/item.repository'
import { ItemModel } from '../../../../database/models/item.model'

export class ItemMongoRepository implements ItemRepository {
  async create(itemEntity: ItemEntity): Promise<ItemEntity | false> {
    const { name, price, quantity, createdAt } = itemEntity.props
    return await ItemModel.create({
      name,
      price,
      quantity,
      created_at: createdAt,
    })
      .then((item) => {
        const { id, name, price, quantity, created_at: createdAt } = item

        return ItemEntity.create({ name, price, quantity, createdAt }, id)
      })
      .catch(() => false)
  }

  async findAll(): Promise<ItemEntity[] | false> {
    return await ItemModel.find()
      .then((items) =>
        items.map((item) =>
          ItemEntity.create(
            {
              name: item.name,
              price: item.price,
              quantity: item.quantity,
              createdAt: item.created_at,
            },
            item.id,
          ),
        ),
      )
      .catch(() => false)
  }

  async findOne(id: string): Promise<ItemEntity | false> {
    return await ItemModel.findOne({
      id,
    })
      .then((item) =>
        ItemEntity.create(
          {
            name: item!.name,
            price: item!.price,
            quantity: item!.quantity,
            createdAt: item!.created_at,
          },
          item!.id,
        ),
      )
      .catch(() => false)
  }

  update(itemEntity: ItemEntity, id: string): Promise<ItemEntity | false> {
    const { name, price, quantity, createdAt } = itemEntity.props
    throw new Error('Method not implemented.')
  }
}
