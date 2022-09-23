import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTicket } from "../features/tickets/ticketSlice";

function Description() {
  const { ticket } = useSelector((state) => state.tickets);
  const { description: ticketDescription } = ticket;

  const [description, setDescription] = useState("");
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const { ticketId } = useParams();

  useEffect(() => {
    setDescription(`${ticketDescription}`);
  }, [edit]);

  const onUpdateTicket = () => {
    dispatch(updateTicket({ ticketId, description }));
    setEdit(!edit);
  };

  return (
    <div className="mt-3 p-4 bg-gray-200 flex justify-between items-start">
      <div>
        <p className="mb-2 font-bold">Description of issue</p>

        {!edit ? (
          <p>{ticketDescription}</p>
        ) : (
          <input
            type="text"
            value={description}
            onSubmit={onUpdateTicket}
            onChange={(e) => setDescription(e.target.value)}
          />
        )}
      </div>

      {!edit ? (
        <button
          className="btn bg-black text-white"
          onClick={() => setEdit(!edit)}
        >
          edit
        </button>
      ) : (
        <button className="btn bg-black text-white" onClick={onUpdateTicket}>
          Update
        </button>
      )}
      {/* 
      <button className="btn bg-black text-white" onClick={onUpdateTicket}>
        Update
      </button> */}
    </div>
  );
}

export default Description;
