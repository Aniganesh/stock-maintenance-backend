import express from 'express'
import { getStocks, addStock } from './../Controllers/Stocks.js'

const router = express.Router()

router.get('/', getStocks)
router.post('/', addStock)
// router.delete('/')

export default router