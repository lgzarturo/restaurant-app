import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Cancel from "./pages/Cancel"
import { Menu } from "./pages/Menu"

function App() {
  return (
    <Router>
      <Menu />
      <div style={{ marginTop: '4em' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:restaurantId" element={<Detail />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
