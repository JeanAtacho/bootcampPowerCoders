import express from 'express'
import fs from 'fs'
import jwt from 'jsonwebtoken'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

// GET, POST, PUT, DELETE

app.post('/login', (req, res) => {
  fs.readFile('./users.json', (err, data) => {
    if (err) return res.status(500).send('Error al leer el archivo de usuarios')

    const users = JSON.parse(data)
    const user = users.find(u => u.username === req.body.username && u.password === req.body.password)
    if (!user) return res.status(401).send({ data: 'usuario o password incorrectos' })

    const { username, role } = user
    const token = jwt.sign({ username, role }, 'mi-super-clave-secreta', { expiresIn: '1h' })
    res.send({ token: `Bearer ${token}` })
  })
})

app.get('/protected', (req, res) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).send('No se proporcionó token de autenticación')

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, 'mi-super-clave-secreta')

    res.send({
      status: 'ok',
      data: `Bienvenido de nuevo, ${decoded.username}`
    })

  } catch (err) {
    res.status(401).send({ error: 'Token no válido' })
  }
})

app.listen(3000, () => console.log('El servidor funciona en la dirección: http://localhost:3000'))