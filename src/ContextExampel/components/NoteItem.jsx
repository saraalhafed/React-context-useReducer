import React from 'react';
import { useNotes } from '../context/NoteContext';

const NoteItem = ({ note }) => { /* note com from the parent Noteitem from map not from useContext */
  const { removeNote } = useNotes();
  
  /* we reach to the this func ( removeNote) with costum provider instead of:
  useNotes = () => useContext(NoteContext); */

  return (
    <li>
      {note} - <button onClick={() => removeNote(note)}>X</button>
    </li>
  );
};

export default NoteItem;
