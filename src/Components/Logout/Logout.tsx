import { UseAppDispatch } from '../../Hooks/reduxHooks';
import { logout } from '../../Redux/Slice/Auth';
const Logout = () => {
  const dispatch = UseAppDispatch();

  return (
    <>
    <li onClick={() => dispatch(logout())} className='nav-li'><h1  className="nav-h1">Logout</h1></li>
    </>
  )
}

export default Logout