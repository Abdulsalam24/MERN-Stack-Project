import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function BackButton({ url }) {
  return (
    <Link to={url}>
      <button className="btn bg-black hover:bg-gray-400 text-white my-2">
        <FaArrowCircleLeft className="mr-3" /> Go Back
      </button>
    </Link>
  );
}

export default BackButton;
