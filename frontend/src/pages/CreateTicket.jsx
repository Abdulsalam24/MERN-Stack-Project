import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTicket } from "../features/tickets/ticketSlice";

function CreateTicket() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    product: "",
    description: "",
  });

  const { name, email, product, description } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      product,
      description,
    };
    dispatch(createTicket(userData));
  };

  // useEffect(() => {
  //   if()
  // }, [])

  return (
    <div className="w-4/5 m-auto">
      <div className="flex items-center justify-center mt-10">
        <h2>Create Ticket</h2>
      </div>
      <p className="text-center my-6 font-bold text-gray-500">
        Please fill out the form below
      </p>
      <form className="form-control" onSubmit={onSubmit}>
        <div className="input-div">
          <label htmlFor="" className="font-bold">
            Customer Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            value={name}
            placeholder="Enter your name"
            className="input w-full"
            onChange={onChange}
          />
        </div>
        <div className="input-div">
          <label htmlFor="" className="font-bold">
            Customer Email
          </label>
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
          <label htmlFor="" className="font-bold">
            Customer Product
          </label>
          <input
            type="text"
            name="product"
            id="product"
            value={product}
            placeholder="Enter your product"
            className="input w-full"
            onChange={onChange}
          />
        </div>
        <div className="input-div">
          <label htmlFor="" className="font-bold">
            Description of the issue
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={description}
            placeholder="Description"
            className="textarea w-full bg-white"
            onChange={onChange}
          ></textarea>
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

export default CreateTicket;
