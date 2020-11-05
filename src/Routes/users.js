import express from 'express'
import { findUser } from '../Controllers/users.js'

const router = express.Router()

router.get('/', findUser)

export default router