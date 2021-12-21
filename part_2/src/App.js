import React, {useEffect, useState} from "react";
import axios from "axios";
import Note from "./components/note.component";

const App = () => {

  const [notes, setNotes] = useState([])
  const [newNotes, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then(res => {
      console.log("Promise fufilled");
      setNotes(res.data)
    })
  },[])

  console.log("rendered", notes.length, "notes");

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

    axios
      .post("http://localhost:3001/notes", noteObject)
      .then(res => {
        setNotes(notes.concat(res.data))
        setNewNote("")
      })
  }

  const handleChange = e => setNewNote(e.target.value)

  const toggleImportanceOf = (id) => {
    console.log('importance of ' + id + ' needs to be toggled')
  }

  return(
    <div>
      <h1>Notes</h1>
      {/* Show important notes feature */}
      <button onClick={() => (setShowAll(!showAll))}>
        show {showAll ? "important" : "all"}
      </button>
      {/*  */}
      <ul>
        {notesToShow.map(note => (
          <Note 
            id={note.id} 
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
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