import { Entity } from '../../../core/domain/entities/entity'

type ItemProps = {
  name: string
  price: number
  quantity: number
  createdAt: Date
}

export class ItemEntity extends Entity<ItemProps> {
  static create(props: ItemProps, id?: string) {
    const itemEntity = new ItemEntity(props, id)

    return itemEntity
  }
}
