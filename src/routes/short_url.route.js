import express from 'express'
import { createShortURL, redirectToOriginalUrl } from '../controllers/urlController.js'
// impo

const router = express.Router()

router.post('/create', createShortURL)

router.get('/:id', redirectToOriginalUrl)

export default router