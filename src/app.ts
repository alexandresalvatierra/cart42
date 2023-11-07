import express from 'express'
import modules from './app.module'
import { environment } from './environment'
import { db } from './database/config.db'
const app = express()
const port = environment.APP_PORT

app.use(express.json())
app.use('/', modules)

db.then(() => {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`)
  })
})
