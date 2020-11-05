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
	console.log("received", body)
	if (!body.name || !body.price || !body.unitsAvailable) {
		res.status(409).json({ message: "name, price and unitsAvailable are required fields" })
		return
	}
	const newStock = new Stock(body)

	try {
		await newStock.save()
		res.status(201).json(newStock)
	} catch (err) {
		res.status(409).json({ message: err.message })
	}
}


export const deleteStock = async (req, res) => {
	const { body } = req
	const { id } = body
	if (!id) {
		res.status(400).json({ message: "id is a required field" })
		return
	}
	try {
		await Stock.deleteOne({ _id: id }, (err) => {
			if (err) {
				console.log({ err });
				res.status(400).json({ message: err.message })
			}
		})
		res.status(200).json(`Item with id ${id} deleted`)
	} catch (err) {
		console.log({ err });
		res.status(400).json({ message: err.message })
	}
}

export const updateStock = async (req, res) => {
	const { body } = req
	const { id } = body
	if (!id) {
		res.status(400).json({ message: "id is a required field" })
		return
	}
	try {
		Stock.findOne({ _id: id }).then(async (stock) => {
			if (body.name) {
				stock['name'] = body.name
			}
			if (body.tag) {
				stock['tag'] = body.tag
			}
			if (body.price) {
				stock['price'] = body.price
			}
			if (body.unitsAvailable) {
				stock['unitsAvailable'] = body.unitsAvailable
			}
			await stock.save()
			res.status(200).json(stock)
		})
	} catch (err) {
		res.status(409).json({ message: err.message })
	}
}
