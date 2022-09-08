import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";


function NavBar() {
  return (
    <>
      <header className="flex justify-between items-center p-5 border-b-2 border-gray-300">
      <Link to="/"><h1 className="text-2xl">Help Desk</h1></Link>
        <ul className="flex">
          <Link to="/login" className="flex items-center" >
          <FaSignOutAlt/> <li> Login</li>
          </Link>
          <Link to="/register" className="flex items-center ml-3">
          <FaUserAlt/><li> Register</li>
          </Link>
        </ul>
      </header>
    </>
  );
}

export default NavBar;
