import { useState } from "react";
import {FaUserLock,FaSignInAlt } from "react-icons/fa";

function Login() {


  const [formData, setformData] = useState({
    email : "",
    password : "",
  })

  const { email , password } = formData

  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
  }))
  }

  return (
    <div className="w-4/5 m-auto">
      <div className="flex items-center justify-center mt-10">
        <FaSignInAlt className="text-3xl" /> <h2>Login</h2>
      </div>
      <p className="text-center my-6 font-bold text-gray-500">
         Login in to get support
      </p>

      <form className="form-control">
        <div className="input-div">
          <input type="email" name="email" id="email" value={email} placeholder="Enter your email" className="input w-full" onChange={onChange}/>
        </div>
        <div className="input-div">
          <input type="password" name="password" id="password" value={password} placeholder="Enter your password" className="input w-full" onChange={onChange}/>
          <FaUserLock />
        </div>
        <div className="text-center my-3">
          <button className="btn bg-black text-white w-full btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
