import WALKMANFIN from '../images/WALKMANFIN.png'
import room from '../images/room.png'
import { useNavigate } from 'react-router-dom'
import MILKAPPA from '../images/MILKAPPA.png'
import MILKITSUNE from '../images/MILKITSUNE.png'
import MILTTANUKI from '../images/MILTTANUKI.png'
import MILSCANTI from '../images/MILSCANTI.png'

const Gameplay = () => {
  const navigate = useNavigate()

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
