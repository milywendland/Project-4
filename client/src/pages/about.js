import MILSCANTI from '../images/MILSCANTI.png'
import MILKITSUNE from '../images/MILKITSUNE.png'
import MILKAPPA from '../images/MILKAPPA.png'
import MILTTANUKI from '../images/MILTTANUKI.png'

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <p>
        Ikimono was created by{' '}
        <a href="https://github.com/milywendland">Mily Wendland</a>
      </p>
      <div className="haydie">
        <img src={MILKITSUNE} alt="kitsune" />
        <img src={MILKAPPA} alt="kappa" />
        <img src={MILSCANTI} alt="robot" />
        <img src={MILTTANUKI} alt="tanuki" />
      </div>
      <p>
        Art By{' '}
        <a href="https://instagram.com/0h.boy.howdy?igshid=YmMyMTA2M2Y=">
          Hayden Augustine
        </a>
      </p>
    </div>
  )
}

export default About
