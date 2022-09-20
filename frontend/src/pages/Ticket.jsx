import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTicket } from "../features/tickets/ticketSlice";
import { toast } from "react-toastify";
import BackButton from "../components/BackButton";

function Ticket() {
  const dispatch = useDispatch();
  const { ticketId } = useParams();

  const { ticket, isLoading, isError, isSuccess } = useSelector(
    (state) => state.tickets
  );
  const { _id, status, product, description } = ticket;

  useEffect(() => {
    dispatch(getTicket(ticketId));
    if (isError) {
      toast.error("Something is wrong");
    }
  }, []);

  return (
    <div>
      <BackButton url="/tickets" />
      <div className="flex justify-between items-center my-4">
        <h3>Ticket Id: {_id} </h3>
        <div className="btn btn-xs btn-disabled text-white bg-green-500 border-0">
          <p>{status}</p>
        </div>
      </div>
      <div>Product: {product}</div>
      <div>Description: {description}</div>
    </div>
  );
}

export default Ticket;
