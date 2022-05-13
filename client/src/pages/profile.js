import { useNavigate, useParams } from 'react-router-dom'

const Profile = ({ user, authenticated }) => {
  const navigate = useNavigate()
  const { id } = useParams()

  return user && authenticated ? (
    <div>
      <h2>Hey, {user.username}! </h2>
      <button onClick={() => navigate(`/choosepet/${id}`)}>Choose A Pet</button>
      <div className="pet-feed">{/* this is where feed will live */}</div>
      <button>Delete Pet :[</button>
    </div>
  ) : (
    <div>
      <h3>Uh oh! You need to be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>SIGN IN</button>
    </div>
  )
}

export default Profile
