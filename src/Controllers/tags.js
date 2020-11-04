import Tag from '../Model/tags.js'
export const addTag = async (req, res) => {
	const { body } = req
	const newTag = new Tag(body)
	try {
		await newTag.save()
		res.status(201).json(newTag)
	} catch (err) {
		res.status(409).json({ message: err.message })
	}
}

export const getAllTags = async (req, res) => {
	const { body } = req
	try {
		const allTags = await Tag.find()
		res.status(200).json(allTags)
	} catch (err) {
		res.status(409).json({ message: err.message })
	}
}


export const deleteTag = async (req, res) => {
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
