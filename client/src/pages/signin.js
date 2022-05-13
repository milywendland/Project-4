import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { SignInUser } from '../services/auth'

const SignIn = ({ setUser, toggleAuthenticated }) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ username: '', password: '' })
    setUser(payload)
    toggleAuthenticated(true)
    navigate(`/profile/${payload.id}`)
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
              onChange={handleChange}
              value={formValues.username}
            />
          </label>
          <label>
            {' '}
            Password:
            <input
              type="text"
              name="password"
              placeholder="password"
              onChange={handleChange}
              value={formValues.password}
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
