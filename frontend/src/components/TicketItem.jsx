function TicketItem({ ticket }) {
  return (
    <div className="ticket items-center mb-5">
      <h3>{Date(1000).toString().slice(8, 21)}</h3>
      <h3> {ticket.product}</h3>
      {/* <h3> {ticket.description}</h3> */}
      <h3 className="btn btn-xs btn-disabled text-white bg-green-500 border-0"> {ticket.status}</h3>
      <div className="btn btn-xs bg-white border-0 text-black">view</div>
    </div>
  );
}

export default TicketItem;
