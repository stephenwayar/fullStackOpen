import React, {useState} from "react";
// import Note from "./components/note.component";

const App = ({ notes }) => {

  const [name, setname ] =  useState("")

  const handleChange = (e) => {
    setname(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`This name you entered is ${name}`)
  }

  console.log(name);

  if (name === "") {
    return(
      <div>
        <input type="text" value={name} onChange={handleChange}/>
        <button>submit</button>
      </div>
    )
  }

  return (
    <div>
      {/* <h1>Notes</h1>
      <ul>
        {notes.map(note => 
            <Note key={note.id} note={note} />
        )}
      </ul> */}
    <form onSubmit={handleSubmit}>
      <label>Enter your name here:</label>
      <input type="text" value={name} onChange={handleChange}/>
      <button>submit</button>
    </form>
    <p>Hello {name}</p>
    </div>
  )
}

export default App;