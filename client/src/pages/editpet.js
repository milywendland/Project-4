import { useNavigate, useParams } from 'react-router-dom'
import {useState } from 'react'
import axios from axios

const EditPet = () => {

  const {id} = useParams()
  const [name, setName] = useState('')

  let navigate = useNavigate()

  const handleNameChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name !== '') {
      axios.put(`http://localhost:3001/api/editpet/${id}`)
      .catch((err)=> console.log(err))
      navigate(`/gameplay/${id}`)
    }
  }

  return (
    <div className="edit">
      <div className="editform">
        <form onSubmit={handleSubmit}>
          <label>
            Pet Name:
            <input onChange={handleNameChange} type="text" placeholder={pet.name} name="name" />
          </label>
          <input type='submit' value="SUBMIT"/>
        </form>
      </div>
    </div>
  )
}

export default EditPet