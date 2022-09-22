import React from "react";

function NoteItem({ note, user }) {
  return (
    <div
      className="mt-2 bg-gray-300 p-4"
      style={{
        backgroundColor: `${note.isStaff ? "red" : "gray"}`,
      }}
    >
      <p className="mb-3">
        <b>Made by : {note.isStaff ? "staff" : user.name}</b>
      </p>
      <p>{note.text}</p>
    </div>
  );
}

export default NoteItem;
