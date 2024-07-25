/* import ContextExample from './ContextExample/ContextExample'; */

import NotesWithoutContext from './NotesWithoutContext/NotesWithoutContext';
import ReducerExample from "./Reducers/ReducerExample"

const App = () => {
  return (
    <> {/* we need to wrapp all the app to give the state */}
       {/* step-4 wrap your application with the provider */}

       {/*  <NoteProvider>  */}

         {/* <NotesWithoutContext /> */}
         {/*   <ContextExample /> */}
         <ReducerExample/>

       {/*  </NoteProvider>  */}
    </>
  );
};

export default App;
