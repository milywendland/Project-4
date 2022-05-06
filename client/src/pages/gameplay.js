import WALKMANFIN from '../images/WALKMANFIN.png'

const Gameplay = () => {
  let foodAmount = 10
  let playAmount = 10
  let sleepAmount = 10
  let happinessAmount = 10

  let game = {
    timePasses: function () {
      foodAmount = foodAmount - 1
      playAmount = playAmount - 2
      sleepAmount = sleepAmount - 1
      happinessAmount = happinessAmount - 1
    },

    isAlive: function () {
      if (foodAmount <= 0) {
        return false
      } else {
        return true
      }
    },

    isSad: function () {
      if (playAmount <= 3 || sleepAmount <= 3 || happinessAmount <= 4) {
        return true
      } else {
        return false
      }
    },

    isSick: function () {
      if (foodAmount <= 3) {
        return true
      } else {
        return false
      }
    },

    foodAdd: function () {
      foodAmount = foodAmount + 1
    },

    playAdd: function () {
      playAmount = playAmount + 1
    },

    sleepAdd: function () {
      sleepAmount = sleepAmount + 1
    },

    happinessAdd: function () {
      happinessAmount = happinessAmount + 1
    },

    didVisit: function () {}
  }

  return (
    <div>
      <div className="console">
        <img src={WALKMANFIN} alt="console" />
      </div>
    </div>
  )
}

export default Gameplay
