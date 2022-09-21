import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { closeTicket, getTicket, reset } from "../features/tickets/ticketSlice";
import { toast } from "react-toastify";
import BackButton from "../components/BackButton";
import { createNote, getNotes } from "../features/notes/noteSlice";
import NoteItem from "../components/NoteItem";

function Ticket() {
  const [noteText, setNoteText] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { ticketId } = useParams();

  const { ticket, isError } = useSelector((state) => state.tickets);
  const { _id, status, product, description, createdAt } = ticket;

  //notes
  const { notes } = useSelector((state) => state.notes);

  console.log(notes, "notessss");

  useEffect(() => {
    dispatch(getTicket(ticketId));
    if (isError) {
      toast.error("Something is wrong");
    }
    dispatch(getNotes(ticketId));
  }, []);

  const handleCloseTicket = () => {
    dispatch(closeTicket(ticketId));
    navigate("/tickets");
  };

  const handleNoteSubmit = (e) => {
    e.preventDefault()
    dispatch(createNote(noteText, ticketId));
  };

  return (
    <div>
      <BackButton url="/tickets" />
      <div className="flex justify-between items-center my-4">
        <h3>Ticket Id: {_id} </h3>
        <div className={`status-${status} btn btn-xs text-white border-0`}>
          <p>{status}</p>
        </div>
      </div>

      <h4>Date Submitted: {new Date(createdAt).toString().slice(0, 15)}</h4>

      <h4>Product: {product}</h4>

      <div className="mt-3 p-4 bg-gray-200">
        <p className="mb-2 font-bold">Description of issue</p>
        <p>{description}</p>
      </div>

      {status === "new" && (
        <div
          className="btn mt-3 text-white bg-red-500 w-full border-0"
          onClick={handleCloseTicket}
        >
          close
        </div>
      )}

      <div className="btn bg-black text-white my-5">Create note</div>
      <form onSubmit={handleNoteSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          className="input"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <div className="btn bg-black text-white" onClick={handleNoteSubmit}>Submit</div>
      </form>

      <div className="notes">
        Notes:
        {notes.map((note) => (
          <NoteItem key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
}

export default Ticket;
