import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import TicketItem from "../components/TicketItem";
import Spinner from "../components/Spinner";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import backgroundImg from "../asset/img/bg.jpg";

function Tickets() {
  const dispatch = useDispatch();
  const { tickets, isSuccess, isLoading } = useSelector(
    (state) => state.tickets
  );

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
    dispatch(getTickets());
    dispatch(reset());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="max">
      <div className="flex items-center justify-center">
        <h2>Tickets</h2>
      </div>
      <BackButton url="/" />

      <div className="table-div overflow-x-auto">
        <table className="table w-full shadow-lg">
          <thead>
            <tr>
              <th>Date</th>
              <th>Products</th>
              <th>status</th>
              <th></th>
            </tr>
          </thead>

          {!tickets.message ? (
            tickets.map((ticket) => (
              <TicketItem key={ticket._id} ticket={ticket} />
            ))
          ) : (
            <p className="text-center">No ticket yet</p>
          )}
          <thead>
            <tr>
              <th>Total: {tickets.length} </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default Tickets;
