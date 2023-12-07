import "./assets/css/App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Shop } from "./pages/Shop"
import { NotFound } from "./pages/NotFound"

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App;