import React from "react";
import Content from "./content.component";
import Header from "./header.component";
import Total from "./total.component";
// import Total from "./total.component";

const Course = ({course}) => {
  return(
    <div>
      <Header course={course.name}/>

      <Content parts={course.parts}/>

      <Total sum={course.parts}/>
 
    </div>
  )
}

export default Course