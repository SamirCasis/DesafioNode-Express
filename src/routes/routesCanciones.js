import { Router } from 'express'
import { getFront, getCancion, postCancion, updCancion, delCancion } from '../controllers/ctrlCanciones.js'

const router = Router()

router.get('/', getFront)
router.get('/canciones', getCancion)
router.post('/canciones', postCancion)
router.put('/canciones/:id', updCancion)
router.delete('/canciones/:id', delCancion)

export default router
