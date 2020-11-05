import express from 'express'
import { findUser } from '../Controllers/users.js'

const router = express.Router()

router.post('/', findUser)

export default router