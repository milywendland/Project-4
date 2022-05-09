import WALKMANFIN from '../images/WALKMANFIN.png'
import room from '../images/room.png'
import { useNavigate } from 'react-router-dom'
import MILKAPPA from '../images/MILKAPPA.png'
import MILKITSUNE from '../images/MILKITSUNE.png'
import MILTTANUKI from '../images/MILTTANUKI.png'
import MILSCANTI from '../images/MILSCANTI.png'

const Gameplay = () => {
  const navigate = useNavigate()

  return (
    <div className="gameplay">
      <div className="console">
        <img src={WALKMANFIN} alt="console" />
      </div>
      <div className="console-pet">
        <img src={MILSCANTI} alt="canti" />
      </div>
      <div className="left-button"></div>
      <div className="right-button"></div>
      <div className="surprise-button"></div>
      <button onClick={() => navigate('/choosepet')}>Choose A Pet</button>
    </div>
  )
}

export default Gameplay
