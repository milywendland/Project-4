import MILKAPPA from '../images/MILKAPPA.png'
import MILKITSUNE from '../images/MILKITSUNE.png'
import MILSCANTI from '../images/MILSCANTI.png'
import MILTTANUKI from '../images/MILTTANUKI.png'

const ChoosePet = () => {
  return (
    <div className="choose-pet">
      <h2>Select a Pet:</h2>
      <div className="pet-wrapper">
        <div className="tanuki-create" onClick="">
          <img src={MILTTANUKI} alt="tanuki" />
        </div>
        <div className="kitsune-create" onClick="">
          <img src={MILKITSUNE} alt="kitsune" />
        </div>
        <div className="kappa-create" onClick="">
          <img src={MILKAPPA} alt="kappa" />
        </div>
        <div className="canti-create" onClick="">
          <img src={MILSCANTI} alt="robot" />
        </div>
      </div>
    </div>
  )
}

export default ChoosePet
