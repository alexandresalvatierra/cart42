import mongoose, { Schema } from 'mongoose'

const CartItemSchema: Schema = new Schema({
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
  quantity: { type: Number, required: true },
  discounts: { type: Number, required: false },
  taxes: { type: Number, required: false },
})

CartItemSchema.set('timestamps', true)

const CartSchema: Schema = new Schema({
  items: [CartItemSchema],
  abandonedAt: { type: Date, required: false },
})

CartSchema.set('timestamps', true)
CartSchema.index({ createdAt: -1 }, { unique: true })

export const CartModel = mongoose.model('Cart', CartSchema)
