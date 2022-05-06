import logo from './logo.svg'
import './App.css'
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Gameplay from './pages/gameplay'
import About from './pages/about'
import SignUp from './pages/signup'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gameplay" element={<Gameplay />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
