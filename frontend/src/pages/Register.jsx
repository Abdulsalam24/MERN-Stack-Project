import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserAlt, FaUserLock, FaUserCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";
import { register, reset } from "../features/auth/authSlice";

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
    }
    dispatch(reset());
  }, [navigate, dispatch, isSuccess, isError, user, message]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-4/5 m-auto">
      <div className="flex items-center justify-center mt-10">
        <FaUserAlt className="text-3xl" /> <h2>Register</h2>
      </div>
      <p className="text-center my-6 font-bold text-gray-500">
        Please Create an Account
      </p>

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
        <div className="text-center my-3">
           <button className="btn bg-black text-white w-full btn-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
