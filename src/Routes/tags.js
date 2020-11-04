import { addTag, getAllTags, deleteTag } from '../Controllers/tags.js'
import express from 'express'

const router = express.Router()

router.get('/', getAllTags)
router.post('/', addTag)
router.delete('/', deleteTag)

export default router