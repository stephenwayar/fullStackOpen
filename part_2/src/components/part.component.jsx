import React from "react";

const Part = ({part, exercises, id}) => {
  return(
    <div>
      <p>{part} {exercises}</p>
    </div>
  )
}

export default Part