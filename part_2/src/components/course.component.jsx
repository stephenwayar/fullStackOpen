import React from "react";
import Content from "./content.component";
import Header from "./header.component";
import Total from "./total.component";
// import Total from "./total.component";

const Course = ({course}) => {
  return(
    <div>
      <Header course={course[0].name}/>

      <Content parts={course[0].parts}/>

      <Total sum={course[0].parts}/>

      <Header course={course[1].name}/>

      <Content parts={course[1].parts}/>

      <Total sum={course[1].parts}/>
 
    </div>
  )
}

export default Course