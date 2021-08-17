import "./App.css"
import Person from "./components/Person"
import Button from "./components/Button"
import Greeting from "./components/Greeting"
import Test from "./components/Test"

function App() {
  const props = {name: "hua quang huy", age: 20}
  return (
    <div className="App">
      <h1>this is the first app react 2022</h1>
      <Person {...props} />
      <Greeting/>
      <Test/>
      <Button/>
    </div>
  )
}

export default App
