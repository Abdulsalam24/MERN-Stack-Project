import { Link, useNavigate } from "react-router-dom";
import { FaBlenderPhone, FaUserAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function NavBar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutUser = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="nav text-base md:text-lg lg:text-xl px-5 mb-14">
      <div className="container flex justify-between items-center py-5 max-w-6xl m-auto ">
        <Link to="/" className="logo">
          <h1 className="font-bold">Phone Desk</h1>
        </Link>
        <ul className="flex">
          {user ? (
            <button className="btn bg-black text-white " onClick={logoutUser}>
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="flex gap-1 items-center ">
                <FaSignOutAlt /> <li> Login</li>
              </Link>

              <Link to="/register" className="flex gap-1 items-center ml-3 ">
                <FaUserAlt />
                <li> Sign up</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
