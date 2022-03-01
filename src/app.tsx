import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Cancel from "./pages/Cancel"
import { Menu } from "./pages/Menu"
import { login } from "./api/auth"
import { useEffect, useState } from "react"
import { HandleStatus } from "./components/HandleStatus"

interface Props {
  status: 'loading' | 'success' | 'error'
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<Props>({ status: 'loading' })
  useEffect(() => {
    (async () => {
      const loginResponse = await login({username: 'admin', password: 'password'})
      console.log(loginResponse)
      if (loginResponse.code === 200) {
        setIsAuthenticated({ status: 'success' })
        localStorage.setItem('accessToken', `${loginResponse.data.tokenType}${loginResponse.data.token}`)
      }
    })()
  }, []);
  return (
    <HandleStatus status={isAuthenticated.status}>
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
    </HandleStatus>
  )
}

export default App
