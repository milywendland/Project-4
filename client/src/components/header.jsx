import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav">
          <Link to="/">Home</Link>
        </div>
      
        <div className="nav">
          <Link to="/about">About</Link>
        </div>
        <div className="nav">
          <Link to="/profile/:id">Profile</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header