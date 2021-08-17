import React, { useState } from "react"

const Button = () => {
  const [count, setcount] = useState(0)
  return (
      <>
      <p>you clicked {count} times</p>
      <button onClick={() => setcount(count + 1)}> click me</button>
      </>
  )
}
export default Button