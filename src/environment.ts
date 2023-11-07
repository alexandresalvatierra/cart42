import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
})

export const environment = {
  MODE_ENV: process.env.NODE_ENV || 'development',
  APP_HOST: process.env.APP_HOST || 'localhost',
  APP_PORT: process.env.APP_PORT || '27017',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: process.env.DB_PORT || '27017',
  DB_NAME: process.env.DB_NAME || 'cart42',
  DB_USER: process.env.DB_USER || 'admin',
  DB_PASS: process.env.DB_PASS || 'pass',
}
