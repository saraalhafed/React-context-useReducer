import PropTypes from 'prop-types';
import { useState } from 'react';

const AddFormWithState = ({ addNote }) => {
  const [note, setNote] = useState('');

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

AddFormWithState.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default AddFormWithState;
