import mongoose, { Schema } from 'mongoose'
import crypto from 'crypto'

const CartItemSchema: Schema = new Schema({
  id: { type: Schema.Types.UUID, unique: true, default: crypto.randomUUID() },
  itemId: { type: Schema.Types.UUID, required: true, unique: false },
  quantity: { type: Number, required: true },
  discounts: { type: Number, required: false },
  taxes: { type: Number, required: false },
  created_at: { type: Date, required: true },
})

const CartSchema: Schema = new Schema({
  id: { type: Schema.Types.UUID, unique: true, default: crypto.randomUUID() },
  items: [CartItemSchema],
  abandoned_at: { type: Date, required: false },
  created_at: { type: Date, required: true },
})

export const CartModel = mongoose.model('Cart', CartSchema)
