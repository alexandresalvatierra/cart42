import { environment } from '../environment'
import mongoose from 'mongoose'

const { MODE_ENV, DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = environment

let connectionString = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`

if (MODE_ENV == 'production') {
  connectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@clustercart42.8dmwg3f.mongodb.net/?retryWrites=true&w=majority`
}

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
