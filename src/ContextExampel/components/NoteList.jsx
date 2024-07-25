import NoteItem from './NoteItem';

const NoteList = () => {

  /* this component need a state (notes) we give that throw useContext */
  /* const {notes} = useContext(NoteContext)*/
  const {notes} = useNotes() /* take state from stor costum,just notes we dont need the func ,make short useNotes = () => useContext(NoteContext); */
  return (
    <ul>
      {notes.map((note, index) => (
        <NoteItem note={note} key={index}  />
      ))}
    </ul>
  );
};

export default NoteList;
