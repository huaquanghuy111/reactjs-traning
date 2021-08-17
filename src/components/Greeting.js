import React from "react"
import User from "./User"
import Guest from "./Guest"

const Greeting = () => {
  if (1) {
    return <User />
  }
  return <Guest />
}

export default Greeting
