import { Stock } from '../Model/stocks.js'

export const getStocks = async (req, res) => {
	try {
		const allStocks = await Stock.find()
		res.status(200).json(allStocks)
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}


export const addStock = async (req, res) => {
	const { body } = req
	const newStock = new Stock(body)
	try {
		await newStock.save()
		res.status(201).json(newStock)
	} catch (err) {
		res.status(409).json({ message: err.message })
	}
}


export const deleteStock = (req, res) => {
	res.send('API is running')
}

