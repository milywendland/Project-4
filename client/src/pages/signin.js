import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const SignIn = () => {
  let navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (e) => {
    e.preventDefault()
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3001/api/signin', {
        username: username,
        password: password
      })
      localStorage.setItem('token', res.data.token)
      navigate('/profile')
    } catch (error) {
      throw error
    }
  }

  return (
    <div>
      <div className="signin">
        <form onSubmit={handleSubmit}>
          <label>
            {' '}
            Username:
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={handleUsernameChange}
            />
          </label>
          <label>
            {' '}
            Password:
            <input
              type="text"
              name="password"
              placeholder="password"
              onChange={handlePasswordChange}
            />
          </label>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <div className="register-b">
        <h3>Sign Up Here:</h3>
        <button onClick={() => navigate('/register')}>SIGN UP</button>
      </div>
    </div>
  )
}

export default SignIn
