import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { createUserRequest, loadUserRequests } from './modules/db.js'

const PORT = 8000;
// const sql_password = ''

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'client')))

app.get('/', (req, res) =>{
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})
app.get('/izbor', (req, res) =>{
  res.sendFile(path.resolve(__dirname, 'client', 'ap.html'))
})
app.get('/t', (req, res) =>{
  res.sendFile(path.resolve(__dirname, 'client', 'logos.html'))
})

app.get('/api/*', (req, res) => {
  createUserRequest(req.query)
  
})

app.get('/api/*', async (req, res) => {
  let data = await loadUserRequests()
  res.json(data)
})

app.listen(PORT, (err) => {
    if(err){
      return console.log(err);
    }
    console.log('Server OK (:' + PORT + ')')
  })
