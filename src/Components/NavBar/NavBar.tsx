import Logout from "../Logout/Logout"
import "./NavBar.css"
const NavBar = () => {
  return (
    <ul className='nav-ul'>
        <li className='nav-li'><h1 className="nav-h1">Home</h1></li>
        <li className='nav-li'><h1 className="nav-h1">About</h1></li>
        <li className='nav-li'><h1 className="nav-h1">Contact</h1></li>
        <Logout/>
    </ul>
  )
}

export default NavBar