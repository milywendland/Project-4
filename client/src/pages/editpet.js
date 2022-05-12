import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const EditPet = () => {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [pet, setPet] = useState('')

  let navigate = useNavigate()

  useEffect(() => {
    const getPetById = async () => {
      const response = await axios.get(
        `http:localhost:3001/api/choosepet/edit/${pet.data.pet._id}`
      )
      console.log(response)
    }
    getPetById()
  }, [id])

  const handleNameChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name !== '') {
      axios
        .put(`http://localhost:3001/api/choosepet/edit/${pet.data.pet._id}`)
        .then((pet) => {
          console.log(pet)
          navigate(`/gameplay/${pet.data.pet._id}`)
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className="edit">
      <div className="editform">
        <form onSubmit={handleSubmit}>
          <label>
            Pet Name:
            <input
              onChange={handleNameChange}
              type="text"
              placeholder={pet.name}
              name="name"
            />
          </label>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  )
}

export default EditPet
