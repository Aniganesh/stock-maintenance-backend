import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import stockRoutes from './src/Routes/stocks.js'
import tagRoutes from './src/Routes/tags.js'
import userRoutes from './src/Routes/users.js'

const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
/* uname aniruddha ,pw aniruddha123456 */
app.use('/stocks', stockRoutes)
app.use('/tags', tagRoutes)
app.use('/users', userRoutes)

const CONNECTION_URL = "mongodb+srv://aniruddha:aniruddha123456@cluster0.shzeo.mongodb.net/stock-maintenance?retryWrites=true&w=majority";
// const CONNECTION_URL = 'mongodb://127.0.0.1:27017/stockMaintenance'
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => { app.listen(PORT, () => { console.log(`API running on ${PORT}`) }) })
	.catch((err) => { console.error(err) })