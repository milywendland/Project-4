import WALKMANFIN from '../images/WALKMANFIN.png'
import { useNavigate } from 'react-router-dom'

const Gameplay = () => {
  const navigate = useNavigate()

  return (
    <div className="gameplay">
      <div className="console">
        <img src={WALKMANFIN} alt="console" />
      </div>
      <button onClick={() => navigate('/choosepet')}>Choose A Pet</button>
    </div>
  )
}

export default Gameplay
