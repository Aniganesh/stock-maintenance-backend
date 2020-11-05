import express from 'express'
import { getStocks, addStock, deleteStock, updateStock } from './../Controllers/Stocks.js'

const router = express.Router()

router.get('/', getStocks)
router.post('/', addStock)
router.delete('/', deleteStock)
router.patch('/', updateStock)

export default router