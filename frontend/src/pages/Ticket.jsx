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
import { FaClock } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { GrStatusUnknown } from "react-icons/gr";

function Ticket() {
  const [noteText, setNoteText] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { ticketId } = useParams();

  const { ticket, isError, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );

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
    dispatch(reset());

  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="max">
      <BackButton url="/tickets" />
      <div className="info">
        <div className="card flex flex-col w-full glass p-6">
          <div className="flex flex-col gap-5 text-left">
            <h4 className="icon">
              <FaClock /> Date Submitted: {" "}
              {new Date(createdAt).toString().slice(0, 15)}
            </h4>
            <h4 className="icon">
              <FiSmartphone /> Product: {product}
            </h4>
            <div>
              <h4 className="icon">
                <AiOutlineFieldNumber /> Ticket Id: {_id}
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <span className="icon">
                <GrStatusUnknown /> status:
              </span>
              <h4
                className={`status-${status} btn btn-xs btn-disabled w-20 text-white border-0`}
              >
                {status}
              </h4>
            </div>
          </div>

          <div className="card-body">
            <Description />

            <div>
              <button
                className="btn bg-black text-white my-5"
                onClick={openModal}
              >
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
              <form
                onSubmit={handleNoteSubmit}
                className="mt-5 flex items-center"
              >
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
          </div>
          <div className="notes mb-5">
            {notes.length > 0 && "Notes"}
            {notes.map((note) => (
              <NoteItem key={note._id} note={note} user={user} />
            ))}
          </div>

          <div className="card-actions flex gap-4 items-center justify-start">
            <button className="btn btn-sm" onClick={onDeleteTicket}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
