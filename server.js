import 'dotenv/config'
import express from 'express'
import routerHTML from './src/routes/routesCanciones.js'
import cors from 'cors'

const app = express() 
const PORT = process.env.PORT ?? 3000

app.use(express.json())
app.use(cors())

app.use('/', routerHTML)

app.listen(PORT, () => console.log(`SERVER 100% Operativo en el puerto ${PORT} -> http://localhost:${PORT}`))
