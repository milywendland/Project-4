import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MILCONSOLECOM from '../images/MILCONSOLECOM.png'

const Profile = ({ user, authenticated }) => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [pet, setPet] = useState('')

  useEffect(() => {
    const getPetByUserId = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/gameplay/${id}`
      )
      console.log(response.data)
      setPet(response.data.user.pets)
    }
    getPetByUserId()
  }, [id])

  return user && authenticated ? (
    <div>
      <h2>Hey, {user.username}! </h2>
      <button onClick={() => navigate(`/choosepet/${id}`)}>Choose A Pet</button>
      <div className="pet-feed">{/* this is where feed will live */}</div>
      <button>Delete Pet :[</button>
      <div className="play-game">
        <div className="console">
          <img src={MILCONSOLECOM} alt="console" />
        </div>
        <div className="console-pet">
          <img src={user.pets[0].img} alt="pet" />
        </div>
        <div className="left-button"></div>
        <div className="right-button"></div>
        <div className="surprise-button"></div>
        <h3>PET</h3>
      </div>
    </div>
  ) : (
    <div>
      <h3>Uh oh! You need to be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>SIGN IN</button>
    </div>
  )
}

export default Profile
