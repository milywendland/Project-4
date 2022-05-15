import MILKAPPA from '../images/MILKAPPA.png'
import MILKITSUNE from '../images/MILKITSUNE.png'
import MILSCANTI from '../images/MILSCANTI.png'
import MILTTANUKI from '../images/MILTTANUKI.png'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ChoosePet = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const kitsuneCreator = async (e) => {
    const packagedPayLoad = {
      name: 'Kaji',
      type: 'Kitsune',
      mood: 'Happy',
      img: 'https://64.media.tumblr.com/9ccf3572dcbb8bfe6be7c270058dd950/1f1a65e1ed55a36b-14/s1280x1920/57e1d3476c24979ae78117d46e8dcaf03a421357.pnj',
      skills: ['shapeshifting', 'being very cute'],
      maxhealth: 10,
      age: 0
    }
    e.preventDefault()
    axios
      .post(`http://localhost:3001/api/choosepet/${id}`, packagedPayLoad)
      .then((pet) => {
        console.log(pet)
        navigate(`/choosepet/edit/${pet.data.pet._id}`)
      })
      .catch((err) => console.log(err))
  }

  const tanukiCreator = async (e) => {
    const packagedPayLoad = {
      name: 'Mikio',
      type: 'Tanuki',
      mood: 'Happy',
      img: 'https://64.media.tumblr.com/82668259f08febdf4c6a2fa03010ea77/1f1a65e1ed55a36b-0b/s1280x1920/37ce88ca32de73dc35b75f6561a02c4d09b54d1b.pnj',
      skills: ['sneaky', 'being very cute'],
      maxhealth: 10,
      age: 0
    }
    e.preventDefault()
    axios
      .post('http://localhost:3001/api/choosepet', packagedPayLoad)
      .then((pet) => {
        console.log(pet)
        navigate(`/choosepet/edit/${pet.data.pet._id}`)
      })
      .catch((err) => console.log(err))
  }

  const kappaCreator = async (e) => {
    const packagedPayLoad = {
      name: 'Midori',
      type: 'Kappa',
      mood: 'Happy',
      img: 'https://64.media.tumblr.com/49bf5a8e6c3504c9d841e543d5e563d7/1f1a65e1ed55a36b-e2/s1280x1920/98319f130d18bcd64688852402092767fc60bbb6.pnj',
      skills: ['eating cucumbers', 'being very cute'],
      maxhealth: 10,
      age: 0
    }
    e.preventDefault()
    axios
      .post('http://localhost:3001/api/choosepet', packagedPayLoad)
      .then((pet) => {
        console.log(pet)
        navigate(`/choosepet/edit/${pet.data.pet._id}`)
      })
      .catch((err) => console.log(err))
  }

  const cantiCreator = async (e) => {
    const packagedPayLoad = {
      name: 'Canti',
      type: 'Robot Alien',
      mood: 'Happy',
      img: 'https://64.media.tumblr.com/4e7fcc2e29469a1ee4e30a0b213ff1f0/8449f835e61b36f0-c4/s500x750/d8c94c0a03bcfeacce996f7ec994e2fa1546721e.pnj',
      skills: ['flying', 'being very cute'],
      maxhealth: 10,
      age: 0
    }
    e.preventDefault()
    axios
      .post('http://localhost:3001/api/choosepet', packagedPayLoad)
      .then((pet) => {
        console.log(pet)
        navigate(`/choosepet/edit/${pet.data.pet._id}`)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="choose-pet">
      <h2>Select a Pet:</h2>
      <div className="pet-wrapper">
        <div className="tanuki-create" onClick={tanukiCreator}>
          <img src={MILTTANUKI} alt="tanuki" />
        </div>
        <div className="kitsune-create" onClick={kitsuneCreator}>
          <img src={MILKITSUNE} alt="kitsune" />
        </div>
        <div className="kappa-create" onClick={kappaCreator}>
          <img src={MILKAPPA} alt="kappa" />
        </div>
        <div className="canti-create" onClick={cantiCreator}>
          <img src={MILSCANTI} alt="robot" />
        </div>
      </div>
    </div>
  )
}

export default ChoosePet
