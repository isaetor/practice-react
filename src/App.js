import "./assets/css/App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Profile } from "./pages/Profile";
import { NotFound } from "./pages/NotFound"

import { Nav } from "./components/nav";
function App(){
  const client = new QueryClient({defaultOptions: {
    queries:{
      refetchOnWindowFocus:false
    },
  }})
  return (
    <center>
      <QueryClientProvider client={client}>
        <Router>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </center>
  )
}

export default App;