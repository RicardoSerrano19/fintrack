import { Home, Send, Pocket,Trello, CreditCard, Calendar } from 'react-feather'
import Logo from '../../svg/dibujo-3.svg'
import Favicon from '../../svg/favicon.svg'
import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
        <img src={Logo} className='logo' alt="Fintrack" width={'50%'}/>
        <img src={Favicon} className='favicon' alt="Fintrack" width={'100%'}/>
        <ul>
            <NavLink
                className={({ isActive }) => isActive ? "active" : ""}
                to="/">
              <li><Home /> <span>Home</span></li>
            </NavLink>

            <NavLink 
                className={({ isActive }) => isActive ? "active" : ""} 
                to="/payments">
              <li><Send /> <span>Payments</span></li>
            </NavLink>

            <li><Calendar /> <span>Calendar</span></li>

            <NavLink 
                className={({ isActive }) => isActive ? "active" : ""}
                to="/deposits">
              <li><Pocket /> <span>Deposits</span></li>
            </NavLink>

            <NavLink 
                className={({ isActive }) => isActive ? "active" : ""}
                to="/history">
              <li><Trello /> <span>History</span></li>
            </NavLink>

            <li><CreditCard /> <span>Accounts</span></li>
        </ul>
    </nav>
  )
}

export default Menu