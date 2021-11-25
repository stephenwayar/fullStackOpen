import React from "react";
import { useState } from "react/cjs/react.development";

const Person = ({name}) => {
  return(
    <p>{name}</p>
  )
}

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [ newName, setNewName ] = useState('')

  const handleChange = e => {
    setNewName(e.target.value)
    console.log(e.target.value);
  }

  const found = persons.find(person => (person.name === newName))

  const handleSubmit = e => {
    e.preventDefault()
    const personObject = {
      name: newName
    }
    if(found){
      alert(`${newName} already exists`)
    }else{
      setPersons(persons.concat(personObject))
      setNewName("")
    }
  }

  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      {persons.map((person, index) => (<Person key={index} name={person.name}/>))}
    </div>
  )
}
export default App;