import { Link } from "react-router-dom";

function TicketItem({ ticket }) {
  return (
    <div className="ticket items-center mb-5">
      <p>{new Date(ticket.createdAt).toLocaleDateString()}</p>
      <p> {ticket.product}</p>
      <p className={`status-${ticket.status} btn btn-xs btn-disabled text-white bg-green-500 border-0`}>
        {ticket.status}
      </p>

      <Link to={`/ticket/${ticket._id}`}>
        <button className="btn btn-xs bg-white md:btn-sm border-0 text-black">view</button>
      </Link>
    </div>
  );
}

export default TicketItem;
