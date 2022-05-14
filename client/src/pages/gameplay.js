import MILCONSOLECOM from '../images/MILCONSOLECOM.png'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Gameplay = ({ user, authenticated }) => {
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

  // let petDead = false
  // let hunger = 0
  // let boredom = 0
  // let pottymeter = 0

  // const checkPetStatus = () => {
  //   petStatus = setInterval(function () {
  //     if (pet.maxhealth === 0) {
  //       petDead = true
  //       endIntervals()
  //     }
  //     if (pet.age === 25) {
  //       killPet()
  //     }
  //   }, 2000)
  // }

  // const endIntervals = () => {
  //   clearInterval(ageInterval)
  //   clearInterval(petStatus)
  //   clearInterval(hungerInterval)
  //   clearInterval(boredomInteral)
  // }

  // const feedPet = () => {
  //   if (hunger > 1) {
  //     hunger--
  //   }
  // }

  // const playWithPet = () => {
  //   if (boredom > 1) {
  //     boredom--
  //   }
  // }

  // const goPotty = () => {
  //   if (pottymeter > 1) {
  //     pottymeter--
  //   }
  // }

  // const killPet = () => {
  //   alert(message, 'Your pet has died')
  // }

  return (
    <div className="gameplay">
      <div className="console">
        <img src={MILCONSOLECOM} alt="console" />
      </div>
      <div className="console-pet">
        <img src={user.pets.img} alt="pet" />
      </div>
      <div className="left-button"></div>
      <div className="right-button"></div>
      <div className="surprise-button"></div>
      <h3>PET</h3>
    </div>
  )
}

export default Gameplay
