import fs from fs
import express from express
import cors from cors

const app = express()

app.use(express.json())
app.use(cors())

app.get('./', (req, resp ) => {})

app.post('./', (req, resp ) => {})

app.put('./', (req, resp ) => {})

app.delete('./', (req, resp ) => {})

app.listen(3000, () => console.log('SERVER 100% Operativo'))