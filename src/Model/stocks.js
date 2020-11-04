import mongoose from 'mongoose'

export const stockSchema = mongoose.Schema({
	name: String,
	tag: { type: String, default: '' },
	allocatedSpaces: [{ type: Number, default: 0 }],
	unitsAvailable: Number,
	price: Number,
	createdAt: {
		type: Date,
		default: new Date()
	}
})

export const Stock = mongoose.model('stocks', stockSchema)

export default Stock