import './App.css'
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Show404 from './components/Show404'

function App() {

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
            <Route path="/" element= {<Home />} />
            <Route path="/*" element= {<Show404 />} />
          </Routes>
        </main>
      </div>
    </Router>

  )
}

export default App
