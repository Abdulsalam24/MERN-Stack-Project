import {
  FaUserAlt,
  FaUserLock,
  FaUserCheck,
  FaSignInAlt,
  FaTicketAlt,
} from "react-icons/fa";

function Home() {
  return (
    <div className="w-4/5 m-auto">
      <div className="flex items-center justify-center mt-10">
        <h2>What do you need help with ?</h2>
      </div>
      <p className="text-center my-6 font-bold text-gray-500">
        Please choose from an option below
      </p>

      <form className="form-control">
        <div className="text-center my-3">
          <button className="btn rounded font-black bg-white hover:bg-gray-100 text-black w-full btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            Create new Ticket <FaTicketAlt className="ml-3" />
          </button>
        </div>
        <div className="text-center my-3">
          <button className="btn rounded bg-black text-white hover:bg-gray-700 w-full btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            View my Tickets <FaTicketAlt className="ml-3" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;