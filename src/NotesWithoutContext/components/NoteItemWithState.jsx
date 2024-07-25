
/* import { propTypes } from 'react-bootstrap/esm/Image'; */

import PropTypes from 'prop-types';/* it commt when i  install vite  */

const NoteItemWithState = ({ note, removeNote }) => {
  return (
    <li>
      {note} - <button onClick={() => removeNote(note)}>X</button>
    </li>
  );
};

NoteItemWithState.propTypes = {
  note: PropTypes.string.isRequired,
  removeNote: PropTypes.func.isRequired,
};
/* to worning if we typ somthing wrong underline */

export default NoteItemWithState;
/* vite
linte:tool to help to lead a proplem 
eslint:tool js to figer out a proplem  it has alot of ruls*/
/* js untrack errors, we can change the variable and value,x=2 than x= true */
/* tscript  just can change the value, x=2 than x=6  we cannot change the typ of the value */