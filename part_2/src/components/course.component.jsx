import React from "react";
import Content from "./content.component";
import Header from "./header.component";
// import Total from "./total.component";

const Course = ({course}) => {
  return(
    <div>
      <Header course={course.name}/>

      <Content parts={course.parts}/>

      {/* <Total 
        exercises1={props.course.parts[0].exercises}
        exercises2={props.course.parts[1].exercises}
        exercises3={props.course.parts[2].exercises}
      /> */}
    </div>
  )
}

export default Course