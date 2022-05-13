import { useNavigate } from 'react-router-dom'

const Profile = ({ user, authenticated }) => {
  const navigate = useNavigate()

  return user && authenticated ? (
    <div>
      <h2>Hey, {user.username}! </h2>
      <img src={user.pets} alt="your pet" />
      <div className="pet-feed">
        <p>This is where the feed of activity will live</p>
      </div>
      <button>Delete Pet :[</button>
    </div>
  ) : (
    <div>
      <h3>Uh oh! You need to be signed in to do that!</h3>
      <button onClick={() => navigate('/')}>SIGN IN</button>
    </div>
  )
}

export default Profile
