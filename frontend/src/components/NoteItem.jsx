import React from "react";

function NoteItem({ note, user }) {
  return (
    <div
      className="mt-2 bg-gray-200 p-4"
      style={{
        backgroundColor: `${note.isStaff ? "#ab3030" : "#F0F0F0"}`,
        color: `${note.isStaff ? "#ffffff" : "#000000"}`

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
