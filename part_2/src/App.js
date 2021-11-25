import React from "react";
import { useState } from "react/cjs/react.development";

const Person = ({name, number}) => {
  return(
    <p>
      {name === "" ? "" : <b>Name:</b>} {name} 
      {number === "" ? "" : <b>Number:</b>} {number}
    </p>
  )
}
 
const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: 123456789 }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState("")

  const handleNameChange = e => {
    setNewName(e.target.value)
    console.log(e.target.value);
  }

  const handleNumberChange = ev => {
    setNewNumber(ev.target.value)
    console.log(ev.target.valuel);
  }

  const nameFound = persons.find(person => (person.name === newName))

  const handleSubmit = e => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if(newName === ""){
      alert("Input cannt be empty")
    }
    else if(nameFound){
      alert(`${newName} already exists`)
    }
    else{
      setPersons(persons.concat(personObject))
      setNewName("")
      setNewNumber("")
    }
  }

  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" value={newName} onChange={handleNameChange}/>
          <br />
          number: <input type="number" value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      {persons.map((person, index) => (<Person key={index} name={person.name} number={person.number}/>))}
    </div>
  )
}
export default App;