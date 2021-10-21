import React, { useState } from "react";
// import Content from "./components/content.component";
// import Header from "./components/header.component";
// import Total from "./components/total.component";

// const App = () => {

//   const course = {
//     course: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   };
  
//   return (
//     <div>
//       <Header course={course.course}/>

//       <Content 
//         part1={course.parts[0].name}
//         exercises1={course.parts[0].exercises}
//         part2={course.parts[1].name}
//         exercises2={course.parts[1].exercises}
//         part3={course.parts[2].name}
//         exercises3={course.parts[2].exercises}
//       />

//       <Total 
//         exercises1={course.parts[0].exercises}
//         exercises2={course.parts[1].exercises}
//         exercises3={course.parts[2].exercises}
//       />
//     </div>
//   );
// };

// const App = () => {

//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAllClicks] = useState([])

//   const handleLeftClick = () => {

//     return(
//       setLeft(left + 1),
//       setAllClicks(allClicks.concat("L"))
//     );
//   };

//   const handleRightClick = () => {

//     return(
//       setRight(right + 1),
//       setAllClicks(allClicks.concat("R"))
//     );
//   };

//   const array = ["made", "love", "hate", "grace", "love"];

//   const found = array.find(param => param === "/love/g");

//   console.log(found);

//   return(
//     <div>

//       <p>{left}</p> <button onClick={handleLeftClick}>Left</button>

//       <p>{right}</p> <button onClick={handleRightClick}>Right</button>

//       <History allClicks={allClicks} />

//     </div>
//   )
// }

const App = () => {

  const anecdotes = [

    'If it hurts, do it more often',

    'Adding manpower to a late software project makes it later!',

    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',

    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',

    'Premature optimization is the root of all evil.',

    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',

    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [anecdote, setAnecdote] = useState(0);

  const madness = () => {
    const randomNum = Math.floor(Math.random() * (7 - 0) + 0)
    setAnecdote(randomNum)
  }



  console.log(anecdote)

  return (
    <div>

      <p>{anecdotes[anecdote]}</p>
      <button onClick={handleClick}>Next</button>

    </div>
  )
}

export default App;