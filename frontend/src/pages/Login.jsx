import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUserLock, FaSignInAlt } from "react-icons/fa";
import Spinner from "../components/Spinner";
import signinimgage from "../asset/img/sign-in.jpg";
import { login, reset } from "../features/auth/authSlice";

function Login() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error("Wrong user credential");
    }
    if (isSuccess) {
      toast.success("Logged in");
      navigate("/");
    }
    dispatch(reset());
  }, [navigate, dispatch, isSuccess, isError, user, message]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="max flex flex-col lg:flex-row bg-white rounded-2xl shadow-sm py-14 px-6 lg:py-16 lg:px-10">
      <div className="sign-up mb-10 lg:mb-0 lg:w-1/2">
        <div className="flex items-center justify-center mt-10">
          <FaSignInAlt className="text-3xl" /> <h2>Login</h2>
        </div>
        <p className="text-center my-6 font-bold text-gray-500">
          Login in to get support
        </p>

        <form className="form-control" onSubmit={onSubmit}>
          <div className="input-div">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              className="input w-full"
              onChange={onChange}
            />
          </div>
          <div className="input-div">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              className="input w-full"
              onChange={onChange}
            />
            <FaUserLock />
          </div>
          <div className="text-center my-3">
            <button className="btn bg-black text-white w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="img flex justify-center items-center w-10/12 m-auto lg:w-1/2">
        <img src={signinimgage} alt="signup-image" />
      </div>
    </div>
  );
}

export default Login;

// <div className="w-11/12 m-auto flex flex-col lg:flex-row bg-white rounded-2xl shadow-sm my-14 py-14 px-6 lg:py-16 lg:px-10">
// <div className="sign-up mb-10 lg:mb-0 lg:w-1/2">
//   <div className="flex items-center justify-center lg:justify-start mb-10">
//     <FaUserAlt className="text-3xl mr-3 lg:text-4xl" /> <h2>Sign up</h2>
//   </div>

//   <form className="form-control" onSubmit={onSubmit}>
//     <div className="input-div">
//       <input
//         type="text"
//         name="name"
//         id="name"
//         value={name}
//         placeholder="Enter your name"
//         className="input w-full"
//         onChange={onChange}
//       />
//       <FaUserAlt />
//     </div>
//     <div className="input-div">
//       <input
//         type="email"
//         name="email"
//         id="email"
//         value={email}
//         placeholder="Enter your email"
//         className="input w-full"
//         onChange={onChange}
//       />
//     </div>
//     <div className="input-div">
//       <input
//         type="password"
//         name="password"
//         id="password"
//         value={password}
//         placeholder="Enter your password"
//         className="input w-full"
//         onChange={onChange}
//       />
//       <FaUserLock />
//     </div>
//     <div className="input-div">
//       <input
//         type="password"
//         name="password2"
//         id="password2"
//         value={password2}
//         placeholder="Comfirm password"
//         className="input w-full"
//         onChange={onChange}
//       />
//       <FaUserCheck />
//     </div>
//     <div className="text-center my-3 lg:text-left">
//       <button className="btn bg-blue-600">Register</button>
//     </div>
//   </form>
// </div>
// <div className="img flex justify-center items-center w-10/12 m-auto lg:w-1/2">
//   <img src={signupimage} alt="signup-image" />
// </div>
// </div>
