import { Container } from 'react-bootstrap';
import AddFormWithState from './components/AddFormWithState';
import NotesListWithState from './components/NotesListWithState';
import { useState } from 'react';

const NotesWithoutContext = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);/* old note+new note */
  };

  const removeNote = (note) => {
    // todo : add remove functionality
    const temp = notes.filter((item) => item != note);/* take out just one */
    setNotes(temp);
  };

  return (
    <Container>
      <AddFormWithState addNote={addNote} />
      <NotesListWithState notes={notes} removeNote={removeNote} />
    </Container>
  );
};

export default NotesWithoutContext;
