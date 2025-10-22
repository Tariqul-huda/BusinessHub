import Login from "./components/Login"
import Navigation from "./components/Navigation"
import { Link, Router, Routes,Route } from "react-router-dom"
function App() {
  

  return (
    <>
    <Routes>
    <Route path="/" element={<Login/>}></Route>
    </Routes>
    </>
  )
}

export default App
