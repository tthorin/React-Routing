import './App.css'
import {BrowserRouter as Router, Routes, Route, NavLink, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import Home from './components/Home'
import Products from './components/Products'
import Show404 from './components/Show404'
import Splash from './components/Splash'

function App() {

  const showSplash = () => {
    useNavigate("/splash", {replace: true})
  }
  useEffect(()=>{
    showSplash()
  },[])

  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/products" element= {<Products/>} />
            <Route path="/home" element= {<Home />} />
            <Route path="/splash" element= {<Splash />} />
            <Route path="/" element= {<Home />} />
            <Route path="/*" element= {<Show404 />} />
          </Routes>
        </main>
      </div>
    </Router>

  )
}

export default App
