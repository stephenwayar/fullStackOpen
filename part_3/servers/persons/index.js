const express = require('express')
const app = express()
app.use(express.json())

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

const date = new Date()

function generateId(){
  const maxId = persons.length > 0 
    ? Math.max(...persons.map(person => person.id)) 
    : 0
  return maxId + 1  
}

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const personObj = persons.find(person => person.id === id)
  if(personObj){res.json(personObj)}
  else{res.status(404).end()}
})

app.get('/api/info', (req, res) => {
  res.status(200).send(`<h3>Phonebook has info for ${persons.length} people.</h3> <br> ${date}`)
})

app.post('/api/persons', (req, res) => {
  const body = req.body
  const nameFinder = persons.find(person => person.name === body.name)

  if(!body.name || !body.number){
    return res.status(400).json({
      errMessage: "Name or Number content missing"
    })
  }else if(nameFinder){
    return res.status(400).json({
      errMessage: "Name must be unique"
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number
  }
  persons = persons.concat(person)
  console.log(persons)
  res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  // console.log(persons)
  res.status(204).end
})

const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`)
})