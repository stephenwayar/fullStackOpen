import React from "react";

const Part = (props) => {
  return(
    <div>
      <p>Part: {props.part}</p>
      <p>Exercise: {props.exercises}</p>
    </div>
  );
};

export default Part;