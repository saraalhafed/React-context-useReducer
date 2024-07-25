import PropTypes from 'prop-types';
import NoteItemWithState from './NoteItemWithState';

const  NotesListWithState = ({ notes, removeNote }) => {
  return (
    <ul>
      {notes.map((note, index) => (
        <NoteItemWithState note={note} key={index} removeNote={removeNote} />
      ))}
    </ul>
  );
};

NotesListWithState.propTypes = {
  notes: PropTypes.array.isRequired,
  removeNote: PropTypes.func.isRequired,
};

export default NotesListWithState;
/* this component didnot use  removeNote  it just recive(unnesery) it to give it to the child notitem */