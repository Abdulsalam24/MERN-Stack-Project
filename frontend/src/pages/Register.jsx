import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserAlt, FaUserLock, FaUserCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";
import { register, reset } from "../features/auth/authSlice";
import signupimage from "../asset/img/signup-image.jpg";

function Register() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
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
    if (password !== password2) {
      toast("Please comfirm password");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/");
      toast.success("Sign up successfully");
    }
    dispatch(reset());
  }, [navigate, dispatch, isSuccess, isError, user, message]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="max flex flex-col lg:flex-row-reverse bg-white rounded-2xl shadow-sm py-14 px-6 lg:py-16 lg:px-10 ">
      <div className="sign-up mb-10 lg:mb-0 lg:w-1/2">
        <div className="flex items-center justify-center lg:justify-start mb-10">
          <FaUserAlt className="text-3xl mr-3 lg:text-4xl" /> <h2>Sign up</h2>
        </div>

        <form className="form-control" onSubmit={onSubmit}>
          <div className="input-div">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Enter your name"
              className="input w-full"
              onChange={onChange}
            />
            <FaUserAlt />
          </div>
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
          <div className="input-div">
            <input
              type="password"
              name="password2"
              id="password2"
              value={password2}
              placeholder="Comfirm password"
              className="input w-full"
              onChange={onChange}
            />
            <FaUserCheck />
          </div>
          <div className="text-center my-3 lg:text-left">
            <button className="btn w-full">Register</button>
          </div>
        </form>
      </div>
      <div className="img flex justify-center items-center w-10/12 m-auto lg:w-1/2">
        <img src={signupimage} alt="signup-image" />
      </div>
    </div>
  );
}

export default Register;
