import IkimonoLogo from '../images/IkimonoLogo.PNG'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home">
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
          <input
            type="submit"
            value="SUBMIT"
            onClick={() => navigate('/profile')}
          />
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
