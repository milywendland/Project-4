import logo from './logo.svg'
import './App.css'
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Gameplay from './pages/gameplay'
import About from './pages/about'
import SignUp from './pages/signup'
import ChoosePet from './pages/choosepet'
import Profile from './pages/profile'
import EditPet from './pages/editpet'
import SignIn from './pages/signin'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gameplay/:id" element={<Gameplay />} />
            <Route path="/gameplay" element={<Gameplay />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/choosepet" element={<ChoosePet />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/gifts" element={<Gameplay />} />
            <Route path="/choosepet/edit/:id" element={<EditPet />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
