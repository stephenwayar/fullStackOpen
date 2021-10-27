import React from "react";
import Part from "./part.component";

const Content = ({parts}) => {
  return(
    <div>
      {parts.map(part => {
        return(
          <Part
            part={part.name}
            exercises={part.exercises}
            id={part.id}
          />
        )
      })}
    </div>
  )
}

export default Content