import { createContext, useState } from 'react';

// step-1 create a context
// it is a component, must be capatilized first letter
export const NoteContext = createContext();

// step-2 create a provider and export( it is a func make state available to another component(shar the state))
export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]); /* state wich we will shar it */

  const addNote = (note) => {
    setNotes([...notes, note]);   /* func wich will we shar it */
  };

  const removeNote = (note) => {
    // todo : add remove functionality
    const temp = notes.filter((item) => item != note);   /* func wich will we shar it */
    setNotes(temp);
  };

  return (
     // you only share the data( here :state and functions) inside the value
     // value should be an object ,destructring the obj to access the variable dirctly(notes instead of item.notes for example)   
    <NoteContext.Provider value={{notes, addNote, removeNote}}>
      {children}
    </NoteContext.Provider>
    /* contextname.provider */
  );
};

// step-3 custom hook-optional  make our code easy
export const useNotes = () => useContext(NoteContext);

/*         any   name=()=> useContext(contextname) */