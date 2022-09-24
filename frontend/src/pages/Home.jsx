import { useEffect } from "react";
import {
  FaTicketAlt,
} from "react-icons/fa";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { reset } from "../features/tickets/ticketSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
  }, []);



  return (
    <div className="flex flex-col items-center justify-center h-96 w-4/5 m-auto">
      <div className="text-center">
        <h2>What do you need help with ?</h2>
        <p className="text-center my-4 font-bold text-gray-400 text-base md:text-xl lg:text-2xl">
          Please choose from an option below
        </p>
      </div>

      <div className="form-control">
        <div className="my-3">
          <Link to="/create-ticket">
            <button className="btn rounded font-black bg-white hover:bg-gray-100 text-black w-full">
              Create new Ticket <FaTicketAlt className="ml-3" />
            </button>
          </Link>
        </div>

        <div className="my-3">
          <Link to="/tickets">
            <button className="btn rounded bg-black text-white hover:bg-gray-700 w-full">
              View my Tickets <FaTicketAlt className="ml-3" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
