import { Settings } from 'react-feather'
import Deposits from '../deposits/Deposits'

const Header = () => {
  return (
    <div className='content'>
      <header>
        <p>Ricardo Serrano</p>
        <div className="profile-photo">RS</div>
        <Settings />
      </header>
      <Deposits />
    </div>
  )
}

export default Header