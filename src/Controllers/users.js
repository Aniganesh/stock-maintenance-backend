import User from '../Model/users.js'
import crypto from 'crypto'

export const findUser = async (req, res) => {
	const { body } = req
	const { name, password } = body
	try {
		const user = await User.findOne({ name, password })
		if (user) {
			res.status(200).json({ auth_token: crypto.randomBytes(32).toString('hex') })
		}
	} catch (err) {
		res.status(403).json({ message: err.message })
	}
}