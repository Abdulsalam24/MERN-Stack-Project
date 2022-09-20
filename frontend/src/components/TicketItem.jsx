import { Link } from "react-router-dom";

function TicketItem({ ticket }) {
  // console.log(new Date(ticket.createdAt).toISOString() , 'ticket iso')
  // console.log(new Date(ticket.createdAt).toString().slice(0,15) , 'ticket tostring')

  // console.log(new Date(ticket.createdAt).toLocaleDateString() , 'ticket tolocal')

  return (
    <div className="ticket items-center mb-5">
      <h3>{new Date(ticket.createdAt).toString().slice(0,15)}</h3>
      <h3> {ticket.product}</h3>
      <h3 className="btn btn-xs btn-disabled text-white bg-green-500 border-0">
        {ticket.status}
      </h3>

      <Link to={`${ticket._id}`}>
        <div className="btn btn-xs bg-white border-0 text-black">view</div>
      </Link>
    </div>
  );
}

export default TicketItem;
