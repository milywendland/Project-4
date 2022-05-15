import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/auth'

const SignUp = () => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: formValues.username,
      password: formValues.password
    })

    setFormValues({
      username: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/signin')
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              placeholder="Username"
              onChange={handleChange}
              value={formValues.username}
              name="username"
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              placeholder="password"
              onChange={handleChange}
              value={formValues.password}
              name="password"
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="text"
              placeholder="confirm password"
              onChange={handleChange}
              value={formValues.confirmPassword}
              name="confirmPassword"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default SignUp
