import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const EditPet = () => {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [pet, setPet] = useState('')

  let navigate = useNavigate()

  useEffect(() => {
    const getPet = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/choosepet/${id}`
      )
      console.log(response.data)
      setPet(response.data.pet)
    }
    getPet()
  }, [id])

  const handleNameChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name !== '') {
      axios
        .put(`http://localhost:3001/api/choosepet/edit/${id}`)
        .catch((error) => console.log(error))
      navigate(`gameplay/${id}`)
    }
  }

  return (
    <div className="name-change">
      <h2>Name Your Pet</h2>
      <div className="name-form">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              onChange={handleNameChange}
              type="text"
              placeholder={pet.name}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default EditPet
