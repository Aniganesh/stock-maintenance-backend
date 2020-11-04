import express from 'express'
import { getStocks, addStock, deleteStock } from './../Controllers/Stocks.js'

const router = express.Router()

router.get('/', getStocks)
router.post('/', addStock)
router.delete('/', deleteStock)

export default router