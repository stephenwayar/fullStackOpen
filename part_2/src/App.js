import React, { useEffect } from "react";
import SearchResult from "./components/searchResult.component";
import Person from "./components/person.component";
import { useState } from "react/cjs/react.development";
import axios from "axios";

const App = () => {

  const [ persons, setPersons ] = useState([])
  
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(res => {
      console.log("Promise fufilled!");
      setPersons(res.data)
    })
  }, [])

  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchResult, setSearchResult] = useState("")

  const nameFound = persons.find(person => (person.name === newName))

  const handleNameChange = e => {
    setNewName(e.target.value)
    console.log(e.target.value);
  }

  const handleNumberChange = ev => {
    setNewNumber(ev.target.value)
    console.log(ev.target.valuel);
  }

  const handleSubmit = e => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if(newName === ""){
      alert("Name input cannt be empty")
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

  const handleSearchChange = e => {
    setSearchResult(e.target.value)
    console.log(e.target.value);
  }

  return(
    <div>
      <h2>Phonebook</h2>

      <p>Search: 
        <input 
          value={searchResult} 
          onChange={handleSearchChange}
        />
      </p>

      <div>
        {persons.filter(person => (person.name === searchResult)).map(filteredPerson => (<SearchResult sResult={filteredPerson.name}/>))}
      </div>

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