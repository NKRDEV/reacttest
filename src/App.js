import logo from "./logo.svg"
import "./App.css"
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
