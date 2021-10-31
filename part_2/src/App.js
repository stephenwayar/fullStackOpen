import React, {useState} from "react";
import Note from "./components/note.component";


const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('') 
  const [showAll, setShowAll] = useState(true)
  
  const addNote = (event) => {

    event.preventDefault()

    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')

    console.log('button clicked', event.target.value)
  }

  const handleNewNote = (event) => {
    setNewNote(event.target.value)
    console.log(event.target.value)
  }

  console.log(notes);

 const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  return (
    <div>

      <h1>Notes</h1>

      <ul>
        {props.notes.map(note => 
            <Note key={note.id} note={note} />
        )}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNewNote}/>
        <button type="submit"> Save </button>
      </form>

    </div>
  )
}

export default App;