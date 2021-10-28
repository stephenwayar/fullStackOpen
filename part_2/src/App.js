import React from "react";
// import Note from "./components/note.component";
import Course from "./components/course.component";

const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return ( <Course course={course}/> )
}

// const App = ({ notes }) => {
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => 
//             <Note key={note.id} note={note} />
//         )}
//       </ul>
//     </div>
//   )
// }

export default App;