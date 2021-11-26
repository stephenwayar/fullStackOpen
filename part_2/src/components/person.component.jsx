import React from "react";

const Person = ({name, number}) => {
  return(
    <p>
      {name === "" ? "" : <b>Name:</b>} {name} 
      {number === "" ? "" : <b> Number:</b>} {number}
    </p>
  )
}
export default Person