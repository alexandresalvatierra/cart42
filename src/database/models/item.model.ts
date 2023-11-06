import mongoose, { Schema } from 'mongoose'

const ItemSchema: Schema = new Schema({
  name: { type: String, unique: true, required: false },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
})

export const ItemModel = mongoose.model('Item', ItemSchema)
