import React from "react";

const MyNote = ({id, content, date, important}) => {
  return(
    <div>
      <p>{content}</p>
      <p>{date}</p>
      <p>{important}</p>
    </div>
  )
}

const App = () => {

  const notes = [
    {
      id: 1,
      content: 'HTML is easy',
      date: '2019-05-30T17:30:31.098Z',
      important: true
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      date: '2019-05-30T18:39:34.091Z',
      important: false
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      date: '2019-05-30T19:20:14.298Z',
      important: true
    }
  ];

  console.log(notes.map((note, e) => {
    return(
      <MyNote
        key={e}
        content={note.content}
        date={note.date}
      />
    )
  }));

  return(
    <div>
      {notes.map((note, e) => {
        return(
          <MyNote
            key={e}
            content={note.content}
            date={note.date}
          />
        )
      })}
    </div>
  )
}
export default App;
