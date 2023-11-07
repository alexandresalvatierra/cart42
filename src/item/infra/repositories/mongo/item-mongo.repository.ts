import { ItemEntity } from '../../../domain/entities/item.entity'
import { ItemRepository } from '../../../domain/repositories/item.repository'
import { ItemModel } from '../../../../database/models/item.model'

export class ItemMongoRepository implements ItemRepository {
  async create(itemEntity: ItemEntity): Promise<ItemEntity | false> {
    const { name, price, quantity } = itemEntity.props
    return await ItemModel.create({
      name,
      price,
      quantity,
    })
      .then((item) => {
        const { id, name, price, quantity, createdAt } = item

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
            },
            item.id,
          ),
        ),
      )
      .catch(() => false)
  }

  async findOne(id: string): Promise<ItemEntity | false> {
    return await ItemModel.findOne({
      _id: id,
    })
      .then((item) =>
        ItemEntity.create(
          {
            name: item!.name,
            price: item!.price,
            quantity: item!.quantity,
          },
          item!.id,
        ),
      )
      .catch(() => false)
  }

  async update(
    itemEntity: ItemEntity,
    id: string,
  ): Promise<ItemEntity | false> {
    const { name, price, quantity } = itemEntity.props
    return await ItemModel.findByIdAndUpdate(
      { _id: id },
      {
        name,
        price,
        quantity,
      },
      { upsert: false },
    )
      .then((item) =>
        item
          ? ItemEntity.create(
              { name, price, quantity, updatedAt: item.updatedAt },
              id,
            )
          : false,
      )
      .catch(() => false)
  }

  async delete(id: string): Promise<boolean> {
    return await ItemModel.findByIdAndDelete({ _id: id })
      .then((item) => (item ? true : false))
      .catch(() => false)
  }
}
