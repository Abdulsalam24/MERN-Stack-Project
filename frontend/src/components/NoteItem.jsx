import React from 'react'

function NoteItem({note}) {

  return (
    <div className='mt-2 bg-gray-300 p-4'> {note.text}</div>
  )
}

export default NoteItem