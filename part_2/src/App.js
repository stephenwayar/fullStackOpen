import React, {useState} from "react";
import Note from "./components/note.component";

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)

  const [newNote, setNewNote] = useState("") 

  const handleSubmit = (e) => {
    e.preventDefault()

    const noteObject = {
      id: notes.lenght + 1,
      content: newNote,
      date: new Date().toISOString(),
      import: Math.random() < 0.5
    }

    setNotes(notes.concat(noteObject))
    setNewNote("")
  }

  const handleChange = (e) => {
    setNewNote(e.target.value)
    console.log(notes);
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
            <Note key={note.id} note={note} />
        )}
      </ul>   

      <form onSubmit={handleSubmit}>
        <input value={newNote} onChange={handleChange}/>
        <button type="submit">save</button>
      </form>  
    </div>
  )
}

export default App;