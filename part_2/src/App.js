import React, {useState} from "react";
import Note from "./components/note.component";

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)

  const [vals, setVals] = useState("")

  const addNote = (e) => {
    e.preventDefault()
    setNotes(e.target.value)
  }

  const handleChange = (e) => {
    setVals(e.target.value)
  }

  const nts = notes.map((note, index) => 
    <Note key={index} note={note} />
  )

  const som = nts.concat(vals)

  console.log(notes)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{som}</li>
      </ul>   

      <form onSubmit={addNote}>
        <input  value={vals} onChange={handleChange}/>
        <button type="submit">save</button>
      </form>  
    </div>
  )
}

export default App;