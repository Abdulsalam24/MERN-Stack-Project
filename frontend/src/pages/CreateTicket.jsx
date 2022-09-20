import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTicket } from "../features/tickets/ticketSlice";
import { reset } from "../features/tickets/ticketSlice";
import BackButton from "../components/BackButton";

function CreateTicket() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    product: "ipad",
    description: "",
  });

  const { product, description } = formData;

  const { isSuccess, isError } = useSelector((state) => state.tickets);
  const { user } = useSelector((state) => state.auth);
  const name = user.name;
  const email = user.email;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      product,
      description,
    };
    dispatch(createTicket(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong");
    }
    if (isSuccess) {
      toast.success("New ticket created");
      dispatch(reset());
      navigate("/tickets");
    }
    dispatch(reset());
  }, [isError, isSuccess, dispatch]);

  return (
    <div className="w-4/5 m-auto">
      <BackButton url="/" />
      <div className="flex items-center justify-center mt-10">
        <h2>Create Ticket</h2>
      </div>
      <p className="text-center my-6 font-bold text-gray-500">
        Please fill out the form below
      </p>

      <div className="form-control">
        <div className="input-div">
          <label htmlFor="" className="font-bold">
            Customer Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            disabled
            value={name}
            className="input w-full"
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
            disabled
            value={email}
            className="input w-full"
          />
        </div>
      </div>

      <form className="form-control" onSubmit={onSubmit}>
        <div className="input-div">
          <label htmlFor="" className="font-bold">
            Customer Product
          </label>

          <select
            name="product"
            id="product"
            onChange={onChange}
            className="input w-full"
          >
            <option value="ipad">Ipad</option>
            <option value="apple">Apple</option>
            <option value="macBook Pro">MacBook Pro</option>
            <option value="iphone">iphone</option>
          </select>
        </div>

        <div className="input-div">
          <label htmlFor="" className="font-bold">
            Description of the issue
          </label>
          <textarea
            name="description"
            id="description"
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
