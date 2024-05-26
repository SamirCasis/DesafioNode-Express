import fs from 'fs'
import path from 'path'

let canciones = []

const getFront = (req, res) => {
  const filePath = path.resolve('index.html')
  res.sendFile(filePath)
}

const getCancion = (req, res) => {
  try {
    const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf-8'))
    res.status(200).json(canciones)
  } catch (error) {
    res.status(500).json({message: ' error  de servidor '})
  }
}

const postCancion = (req, res) => {
  try {
    const cancion = req.body
    const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf-8'))
    canciones.push(cancion)
    fs.writeFileSync('repertorio.json', JSON.stringify(canciones, null, 2))
    res.status(200).send('cancion ingresada')
  } catch (error) {
    res.status(500).json({message: ' error al ingresar '})
  }
}

const updCancion = (req, res) => {
  try {
    const cancion = req.body
    const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf-8'))
    const id = canciones.
    canciones.push(cancion)
    fs.writeFileSync('repertorio.json', JSON.stringify(canciones))
    res.status(200).send('cancion ingresada')
  } catch (error) {
    res.status(500).json({message: ' error al ingresar '})
  }
}

const delCancion = (req, res) => {
  const { id } = req.params
  canciones = canciones.filter(cancion => cancion.id !== id)
  res.status(204).end()
}


export { getFront, getCancion, postCancion, updCancion, delCancion }