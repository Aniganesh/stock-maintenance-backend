import mongoose from 'mongoose'

export const UserSchema = mongoose.Schema({
	name: String,
	password: String,
})

const User = mongoose.model('users', UserSchema)

export default User