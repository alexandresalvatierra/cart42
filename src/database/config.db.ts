import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env

const connectionString = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`

export const db = mongoose
  .connect(connectionString, {})
  .then((res) => {
    if (res) {
      console.log(`Database connection successfully to ${DB_NAME}`)
    }
  })
  .catch((err) => {
    console.log(err)
  })
