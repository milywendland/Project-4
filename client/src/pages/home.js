import IkimonoLogo from '../images/IkimonoLogo.PNG'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  let navigate = useNavigate()

  const handleSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:3001/api/login', data)
      localStorage.setItem('token', res.data.token)
      return res.data.user
      navigate('/gameplay/:id')
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="home">
      {/* 
      id love to have a title screen pop up here with the song taylor made and art by hayden */}

      <img src={IkimonoLogo} alt="ikomono logo" />
      <div className="signin">
        <form>
          <label>
            {' '}
            Username:
            <input type="text" placeholder="username" />
          </label>
          <label>
            {' '}
            Password:
            <input type="text" placeholder="password" />
          </label>
          <input type="submit" value="SUBMIT" onSubmit={handleSubmit} />
        </form>
      </div>
      <div clasName="register-b">
        <h3>Sign Up Here:</h3>
        <button onClick={() => navigate('/register')}>SIGN UP</button>
      </div>
    </div>
  )
}

export default Home
