import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { closeTicket, getTicket, reset } from "../features/tickets/ticketSlice";
import { toast } from "react-toastify";
import BackButton from "../components/BackButton";

function Ticket() {
  const dispatch = useDispatch();
  const { ticketId } = useParams();

  const { ticket, isError } = useSelector((state) => state.tickets);

  const { _id, status, product, description, createdAt } = ticket;

  useEffect(() => {
    dispatch(getTicket(ticketId));
    if (isError) {
      toast.error("Something is wrong");
    }
  }, []);

  //   closeTicket()

  return (
    <div>
      <BackButton url="/tickets" />
      <div className="flex justify-between items-center my-4">
        <h3>Ticket Id: {_id} </h3>
        <div className="btn btn-xs btn-disabled text-white bg-green-500 border-0">
          <p>{status}</p>
        </div>
      </div>

      <h4>Date Submitted: {new Date(createdAt).toString().slice(0, 15)}</h4>

      <h4>Product: {product}</h4>

      <div className="mt-3 p-4 bg-gray-200">
        <p className="mb-2 font-bold">Description of issue</p>
        <p>{description}</p>
      </div>

      {status !== "new" && <div className="btn w-full border-0">thi</div>}
    </div>
  );
}

export default Ticket;
