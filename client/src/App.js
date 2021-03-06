import logo from './logo.svg'
import './App.css'
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import SignUp from './pages/signup'
import ChoosePet from './pages/choosepet'
import Profile from './pages/profile'
import EditPet from './pages/editpet'
import SignIn from './pages/signin'
import DeletePet from './pages/deletepet'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/auth'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <div>
        <Header user={user} authenticated={authenticated} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/choosepet/:id" element={<ChoosePet />} />
            <Route
              path="/profile/:id"
              element={<Profile user={user} authenticated={authenticated} />}
            />
            <Route path="/gifts" element={<Profile />} />
            <Route path="/choosepet/edit/:id" element={<EditPet />} />
            <Route
              path="/signin"
              element={
                <SignIn
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                />
              }
            />
            <Route
              path="/deletepet/:id"
              element={<DeletePet user={user} authenticated={authenticated} />}
            />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
