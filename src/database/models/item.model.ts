import mongoose, { Schema } from 'mongoose'
import crypto from 'crypto'

const ItemSchema: Schema = new Schema({
  id: { type: Schema.Types.UUID, unique: true, default: crypto.randomUUID() },
  name: { type: String, unique: true, required: false },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  created_at: { type: Date, required: true },
})

export const ItemModel = mongoose.model('Item', ItemSchema)
