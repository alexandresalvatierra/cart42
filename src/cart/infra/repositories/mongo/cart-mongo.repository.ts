import { CartEntity } from '../../../domain/entities/cart.entity'
import { CartRepository } from '../../../domain/repositories/cart.repository'
import { CartModel } from '../../../../database/models/cart.model'
import { CartItemEntity } from '../../../domain/entities/cart-item.entity'
import mongoose from 'mongoose'

export class CartMongoRepository implements CartRepository {
  async create(cartEntity: CartEntity): Promise<CartEntity | false> {
    const { items } = cartEntity.props
    const itemsInsert = items.map((cartItem) => {
      const { itemId, quantity, discounts, taxes } = cartItem.props
      return {
        itemId,
        quantity,
        discounts,
        taxes,
      }
    })

    return await CartModel.create({
      items: itemsInsert,
    })
      .then(async (cart) => {
        return await this.findOne(cart.id)
        /* const { id, items, createdAt } = cart
        const cartItemEntity = items.map((cartItem: any) => {
          const { id, itemId, quantity, discounts, taxes, createdAt } = cartItem
          return CartItemEntity.create(
            {
              itemId,
              quantity,
              discounts,
              taxes,
              createdAt,
            },
            id,
          )
        })
        return CartEntity.create({ items: cartItemEntity, createdAt }, id) */
      })
      .catch(() => false)
  }

  async findAll(): Promise<CartEntity[] | false> {
    return await CartModel.aggregate([
      { $unwind: '$items' },
      {
        $lookup: {
          from: 'items',
          localField: 'items.itemId',
          foreignField: '_id',
          as: 'itemDetails',
        },
      },
      {
        $addFields: {
          'items.itemDetails': { $arrayElemAt: ['$itemDetails', 0] },
        },
      },
      {
        $group: {
          _id: { $toString: '$_id' },
          quantity: {
            $sum: '$items.quantity',
          },
          subtotal: {
            $sum: {
              $multiply: ['$items.quantity', '$items.itemDetails.price'],
            },
          },
          discounts: {
            $sum: '$items.discounts',
          },
          taxes: {
            $sum: '$items.taxes',
          },
          items: {
            $push: {
              itemId: { $toString: '$items.itemId' },
              name: '$items.itemDetails.name',
              price: '$items.itemDetails.price',
              quantity: '$items.quantity',
              discounts: '$items.discounts',
              taxes: '$items.taxes',
            },
          },
        },
      },
      {
        $addFields: {
          total: {
            $subtract: [{ $add: ['$subtotal', '$taxes'] }, '$discounts'],
          },
        },
      },
    ])
      .exec()
      .then((carts) => {
        return carts.map((cart) => {
          const { _id, quantity, subtotal, discounts, taxes, items, total } =
            cart
          const cartItemEntity = items.map((cartItem: any) => {
            const { itemId, name, price, quantity, discounts, taxes } = cartItem
            return CartItemEntity.create({
              itemId,
              name,
              price,
              quantity,
              discounts,
              taxes,
            })
          })
          return CartEntity.create(
            {
              quantity,
              subtotal,
              discounts,
              taxes,
              total,
              items: cartItemEntity,
            },
            _id,
          )
        })
      })
      .catch(() => false)
  }

  async findOne(id: string): Promise<CartEntity | false> {
    return await CartModel.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      { $unwind: '$items' },
      {
        $lookup: {
          from: 'items',
          localField: 'items.itemId',
          foreignField: '_id',
          as: 'itemDetails',
        },
      },
      {
        $addFields: {
          'items.itemDetails': { $arrayElemAt: ['$itemDetails', 0] },
        },
      },
      {
        $group: {
          _id: { $toString: '$_id' },
          quantity: {
            $sum: '$items.quantity',
          },
          subtotal: {
            $sum: {
              $multiply: ['$items.quantity', '$items.itemDetails.price'],
            },
          },
          discounts: {
            $sum: '$items.discounts',
          },
          taxes: {
            $sum: '$items.taxes',
          },
          items: {
            $push: {
              itemId: { $toString: '$items.itemId' },
              name: '$items.itemDetails.name',
              price: '$items.itemDetails.price',
              quantity: '$items.quantity',
              discounts: '$items.discounts',
              taxes: '$items.taxes',
            },
          },
        },
      },
      {
        $addFields: {
          total: {
            $subtract: [{ $add: ['$subtotal', '$taxes'] }, '$discounts'],
          },
        },
      },
    ])
      .exec()
      .then((carts) => {
        const { _id, quantity, subtotal, discounts, taxes, items, total } =
          carts[0]
        const cartItemEntity = items.map((cartItem: any) => {
          const { itemId, name, price, quantity, discounts, taxes } = cartItem
          return CartItemEntity.create({
            itemId,
            name,
            price,
            quantity,
            discounts,
            taxes,
          })
        })
        return CartEntity.create(
          {
            quantity,
            subtotal,
            discounts,
            taxes,
            total,
            items: cartItemEntity,
          },
          _id,
        )
      })
      .catch(() => false)
  }
}
