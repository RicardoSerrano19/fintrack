import { Settings } from 'react-feather'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div className='content'>
      <header>
        <p>Ricardo Serrano</p>
        <div className="profile-photo">RS</div>
        <Settings />
      </header>
      <Outlet />
    </div>
  )
}

export default Header