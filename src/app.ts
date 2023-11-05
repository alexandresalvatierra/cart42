import express from 'express'
import modules from './app.module'
import { db } from './database/config.db'
const app = express()
const port = 4242

app.use(express.json())
app.use('/', modules)

db.then(() => {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`)
  })
})
