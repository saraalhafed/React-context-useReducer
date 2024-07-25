import React, { useContext, useState } from 'react';
import { NoteContext,useNotes } from '../context/NoteContext';

const AddForm = () => {
  const [note, setNote] = useState('');  /* this component need own state ,we will use it just here so we use usestate */

  // to reach context, wwe have useContext hook. It needs the context as a argument
/*   const { addNote } = useContext(NoteContext); this is the another way to reach the state */
  const { addNote } = useNotes(); /* custom hook way */
  /* to reach the state with costume way:
  useNotes = () => useContext(NoteContext);costume make the cod short */

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note);
    setNote('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddForm;
