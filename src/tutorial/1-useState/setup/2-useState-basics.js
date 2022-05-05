import React, { useState } from "react"
// useState is a function should be written in curly braces
const UseStateBasics = () => {
  // console.log(useState())
  const [text, setText] = useState("random title")
  const handleClick = () => {
    if (text === "random title") {
      setText("hello world")
    } else {
      setText("random title")
    }
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
