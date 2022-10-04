import React, { useState } from "react";

function App() {
  //this is a state action that changes when button is clicked
  const [headingText, setHeadingText] = useState("Hello");

  //this constrols the state of the button tag
  const [isMouseOver, setMouseOver] = useState(false);

  //method is triggered when button is clicked to set off the use sest function
  function handleClick() {
    //this function changes the h1 text
    setHeadingText("submitted");
  }

  //state funciton trigger for is mouse over and set the state true
  function handleMouseOver() {
    setMouseOver(true);
  }
  //this will do the opposite and set the state to false
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
