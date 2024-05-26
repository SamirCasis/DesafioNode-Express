import fs from 'fs'
import path from 'path'

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
    res.status(201).send('cancion ingresada')
  } catch (error) {
    res.status(500).json({message: ' error al ingresar '})
  }
}

const updCancion = (req, res) => {
  try {
    const { id } = req.params
    const cancion = req.body
    const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf-8'))
    const index = canciones.findIndex(c => c.id == id)
    canciones[index] = cancion
    fs.writeFileSync('repertorio.json', JSON.stringify(canciones, null, 2))
    res.status(201).send('Canción actualizada')
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la canción' })
  }
}


const delCancion = (req, res) => {
  try {
    const { id } = req.params
    const canciones = JSON.parse(fs.readFileSync('repertorio.json', 'utf-8'))
    const index = canciones.findIndex(c => c.id == id)
    canciones.splice(index, 1)
    fs.writeFileSync('repertorio.json', JSON.stringify(canciones, null, 2))
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la canción' })
  }
}


export { getFront, getCancion, postCancion, updCancion, delCancion }