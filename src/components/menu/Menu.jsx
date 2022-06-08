import { Home, Send, Pocket,Trello, CreditCard, Calendar } from 'react-feather'
import Logo from '../../svg/dibujo-3.svg'
import Favicon from '../../svg/favicon.svg'
const Menu = () => {
  return (
    <nav>
        <img src={Logo} className='logo' alt="Fintrack" width={'50%'}/>
        <img src={Favicon} className='favicon' alt="Fintrack" width={'100%'}/>
        <ul>
            <li className='active'><Home /> <span>Home</span></li>
            <li><Send /> <span>Payments</span></li>
            <li><Calendar /> <span>Calendar</span></li>
            <li><Pocket /> <span>Deposits</span></li>
            <li><Trello /> <span>History</span></li>
            <li><CreditCard /> <span>Accounts</span></li>
        </ul>
    </nav>
  )
}

export default Menu