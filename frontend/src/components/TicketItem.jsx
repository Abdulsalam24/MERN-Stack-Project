import React from "react";

function TicketItem({ ticket }) {
  return (
    <div>
      <h3>Product {ticket.product}</h3>
      <h3>description {ticket.description}</h3>
      <h3>time {ticket.createdAt}</h3>
    </div>
  );
}

export default TicketItem;
