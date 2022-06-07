import { Settings } from 'react-feather'
import Home from '../home/Home'

const Header = () => {
  return (
    <div className='content'>
      <header>
        <p>Ricardo Serrano</p>
        <div className="profile-photo">RS</div>
        <Settings />
      </header>
      <Home />
    </div>
  )
}

export default Header