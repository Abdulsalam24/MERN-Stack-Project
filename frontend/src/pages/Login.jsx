import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUserLock, FaSignInAlt } from "react-icons/fa";

import { login,reset } from "../features/auth/authSlice";


function Login() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isSuccess,isError } = useSelector((state) => state.auth);

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
    if(isError){
      toast.error()
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [navigate,dispatch,isSuccess,isError,user]);

  return (
    <div className="w-4/5 m-auto">
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
          <button className="btn bg-black text-white w-full btn-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
