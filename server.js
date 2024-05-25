import 'dotenv/config'
import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())


app.listen(PORT, () => console.log(`SERVER OK en el puerto ${PORT} -> http://localhost:${PORT}`))
