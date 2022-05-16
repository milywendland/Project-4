import axios from 'axios'

const DeletePet = ({ user, authenticated }) => {
  return user && authenticated ? (
    <div>
      <div className="deletehim">
        <h3>Are you sure you want to delete {user.pets[0].name}?</h3>
        <img src={user.pets[0].img} alt={user.pets[0].name} />
      </div>
      <button>Delete</button>
    </div>
  ) : (
    <div>
      <h2>IDK HOW YOU GOT HERE?</h2>
    </div>
  )
}

export default DeletePet
