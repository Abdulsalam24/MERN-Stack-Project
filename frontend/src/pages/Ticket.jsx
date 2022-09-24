import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  closeTicket,
  getTicket,
  reset,
  deleteTicket,
} from "../features/tickets/ticketSlice";
import { toast } from "react-toastify";
import BackButton from "../components/BackButton";
import { createNote, getNotes } from "../features/notes/noteSlice";
import NoteItem from "../components/NoteItem";
import Modal from "react-modal";
import Spinner from "../components/Spinner";

import { ImCancelCircle } from "react-icons/im";
import Description from "../components/Description";

function Ticket() {
  const [noteText, setNoteText] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { ticketId } = useParams();

  const { ticket, isError, isLoading } = useSelector((state) => state.tickets);
  const { _id, status, product, description, createdAt } = ticket;

  //notes
  const { user } = useSelector((state) => state.auth);

  const { notes } = useSelector((state) => state.notes);

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

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#root");

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote({ noteText, ticketId }));
    setNoteText("");
    closeModal();
  };

  const onDeleteTicket = () => {
    dispatch(deleteTicket(ticketId));
    navigate("/tickets");
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-4/5 m-auto container">
      <BackButton url="/tickets" />
      <div className="flex justify-between items-center my-4">
        <h3>Ticket Id: {_id} </h3>
        <div className={`status-${status} btn btn-xs text-white border-0`}>
          <p>{status}</p>
        </div>
      </div>

      <h4>Date Submitted: {new Date(createdAt).toString().slice(0, 15)}</h4>

      <h4>Product: {product}</h4>

      <Description />

      <button
        className="btn bg-red-600 border-0 text-white mt-2"
        onClick={onDeleteTicket}
      >
        Delete
      </button>

      {status === "new" && (
        <div className="text-right">
          <button
            className="btn mt-3 text-white bg-red-700 border-0"
            onClick={handleCloseTicket}
          >
            <ImCancelCircle className="mr-3" />
            Close
          </button>
        </div>
      )}

      <div>
        <button className="btn bg-black text-white my-5" onClick={openModal}>
          Create note
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={openModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create note"
      >
        <div onClick={() => setModalIsOpen(false)}>
          <ImCancelCircle />
        </div>
        <form onSubmit={handleNoteSubmit} className="mt-5 flex items-center">
          <textarea
            name="text"
            id="text"
            className="input border border-black"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          ></textarea>
          <div
            className="btn bg-black text-white ml-4"
            onClick={handleNoteSubmit}
          >
            Submit
          </div>
        </form>
      </Modal>

      <div className="notes">
        Notes:
        {notes.map((note) => (
          <NoteItem key={note._id} note={note} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Ticket;
