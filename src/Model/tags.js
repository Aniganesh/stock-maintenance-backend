import mongoose from 'mongoose'

export const tagSchema = mongoose.Schema({
	name: String,
	createdAt: {
		type: Date,
		default: new Date()
	}
})

export const Tag = mongoose.model('tags', tagSchema)

export default Tag