import { useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import TicketItem from "../components/TicketItem";
import { getTickets, reset } from "../features/tickets/ticketSlice";

function Tickets() {
  const dispatch = useDispatch();
  const { tickets, isError, isSuccess, isLoading } = useSelector(
    (state) => state.tickets
  );

  console.log(tickets, "ticketsssss");

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
    dispatch(getTickets());
  }, [dispatch]);

  return (
    <>
      <BackButton url="/" />
      <div className="flex items-center justify-center mt-10">
        <h2>Tickets</h2>
      </div>

      {tickets.map((ticket) => (
        <TicketItem key={ticket._id} ticket={ticket} />
      ))}
    </>
  );
}

export default Tickets;
