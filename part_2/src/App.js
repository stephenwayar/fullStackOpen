import React, {useEffect, useState} from "react";
import axios from "axios";
import Note from "./components/note.component";

const App = (props) => {

  const [notes, setNotes] = useState([])
  const [newNotes, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log("Effect");
    axios.get("http://localhost:3001/notes").then(res => {
      console.log("Promise fufilled");
      setNotes(res.data)
    })
  },[])

  console.log("render", notes.length, "notes");

  const notesToShow = showAll 
    ? notes
    : notes.filter(note => (note.important === true))

  const addNote = e => {
    e.preventDefault()
    const noteObject = {
      id: notes.lenght + 1,
      content: newNotes,
      date: new Date().toDateString,
      important: Math.random() < 0.5
    }
    setNotes(notes.concat(noteObject))
    setNewNote("")
  }

  const handleChange = e => {
    setNewNote(e.target.value)
  }

  return(
    <div>
      <h1>Notes</h1>
      <button onClick={() => (setShowAll(!showAll))}>
        show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map(note => (<Note id={note.id} note={note}/>))}
      </ul>

      <form onSubmit={addNote}>
        <label>Enter Note:</label>
        <input value={newNotes} onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  )
} 
export default App;