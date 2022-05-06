import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav">
          <Link to="/">Home</Link>
        </div>
        <div className="nav">
          <Link to="/gameplay">Play</Link>
        </div>
        <div className="nav">
          <Link to="/about">About</Link>
        </div>
        <div className="nav">
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header