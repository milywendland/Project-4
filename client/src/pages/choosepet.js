import MILKAPPA from '../images/MILKAPPA.png'
import MILKITSUNE from '../images/MILKITSUNE.png'
import MILSCANTI from '../images/MILSCANTI.png'
import MILTTANUKI from '../images/MILTTANUKI.png'
import { useNavigate } from 'react-router-dom'

const ChoosePet = () => {
  const navigate = useNavigate()
  const tanuki_id = '62796ee0eac89c7f2a2d816f'
  const kitsune_id = '62796ee0eac89c7f2a2d8170'
  const kappa_id = '62796ee0eac89c7f2a2d8171'
  const canti_id = '62796ee0eac89c7f2a2d816e'

  return (
    <div className="choose-pet">
      <h2>Select a Pet:</h2>
      <div className="pet-wrapper">
        <div
          className="tanuki-create"
          onClick={() => {
            navigate(`/edit/${tanuki_id}`)
          }}
        >
          <img src={MILTTANUKI} alt="tanuki" />
        </div>
        <div
          className="kitsune-create"
          onClick={() => {
            navigate(`/choosepet/edit/${kitsune_id}`)
          }}
        >
          <img src={MILKITSUNE} alt="kitsune" />
        </div>
        <div
          className="kappa-create"
          onClick={() => {
            navigate(`/choosepet/edit/${kappa_id}`)
          }}
        >
          <img src={MILKAPPA} alt="kappa" />
        </div>
        <div
          className="canti-create"
          onClick={() => {
            navigate(`/choosepet/edit/${canti_id}`)
          }}
        >
          <img src={MILSCANTI} alt="robot" />
        </div>
      </div>
    </div>
  )
}

export default ChoosePet
