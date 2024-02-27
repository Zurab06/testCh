import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"


const App = () => {
  return (
    <div className="App">
     <input type="text" placeholder="search jokes..." className="input"/>
    </div>
  )
}

export default App
