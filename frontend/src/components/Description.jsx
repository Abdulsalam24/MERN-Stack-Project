import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { closeTicket, updateTicket } from "../features/tickets/ticketSlice";
import { useNavigate } from "react-router-dom";

function Description() {
  const { ticket, isSuccess } = useSelector((state) => state.tickets);
  const { status } = ticket;

  const { description: ticketDescription } = ticket;

  const [description, setDescription] = useState("");
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { ticketId } = useParams();

  useEffect(() => {
    setDescription(`${ticketDescription}`);
  }, [edit]);

  const onUpdateTicket = () => {
    dispatch(updateTicket({ ticketId, description }));
    setEdit(!edit);
  };

  const handleCloseTicket = () => {
    dispatch(closeTicket(ticketId));
    if (isSuccess) {
      navigate("/tickets");
    }
  };

  return (
    <div className="description my-5 mb-10 flex justify-between items-start p-5">
      <div>
        <p className="mb-2 font-bold">Description of issue</p>
        <input
          type="text"
          className="p-3"
          disabled={edit ? false : true}
          value={edit ? description : ticketDescription}
          onChange={(e) => setDescription(e.target.value)}
          onSubmit={onUpdateTicket}
        />
      </div>

      <div className="flex items-center gap-3">
        {!edit ? (
          <button className="btn btn-sm" onClick={() => setEdit(!edit)}>
            edit
          </button>
        ) : (
          <button className="btn btn-sm" onClick={onUpdateTicket}>
            Update
          </button>
        )}

        {status === "new" && (
          <div className="text-right">
            <button
              className="btn btn-sm border-0"
              onClick={handleCloseTicket}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Description;
