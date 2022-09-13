import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function NavBar() {
  const { user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const logoutUser = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/")
  };

  return (
    <>
      <header className="flex justify-between items-center p-5 border-b-2 border-gray-300">
        <Link to="/">
          <h1 className="text-2xl">Support Desk</h1>
        </Link>

        <ul className="flex">
          {user ? (
            <button className="btn bg-black text-white" onClick={logoutUser}>
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="flex items-center">
                <FaSignOutAlt /> <li> Login</li>
              </Link>

              <Link to="/register" className="flex items-center ml-3">
                <FaUserAlt />
                <li> Register</li>
              </Link>
            </>
          )}
        </ul>
      </header>
    </>
  );
}

export default NavBar;
