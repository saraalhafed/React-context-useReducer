/* import ContextExample from './ContextExample/ContextExample'; */
import { AuthProvider } from './LoginExample/context/AuthContext';
import LoginExample from './LoginExample/LoginExample';
import NotesWithoutContext from './NotesWithoutContext/NotesWithoutContext';
import ReducerExample from "./Reducers/ReducerExample"

const App = () => {
  return (
    <> {/* we need to wrapp all the app to give the state */}
       {/* step-4 wrap your application with the provider */}

       {/*  <NoteProvider>  */}

         {/* <NotesWithoutContext /> */}
         {/*   <ContextExample /> */}
        {/*  <ReducerExample/>*/}

       {/*  </NoteProvider>  */}
       <AuthProvider>    {/* all the children can access to state which sharing */}
        
     {/*   <NoteProvider> */}
          {/* context has limited capabilities when it is compared with Redux. And */}
          {/* when the application gets bigger, it will not be effective as Redux */}
          <LoginExample />
        {/* </NoteProvider> */}
       </AuthProvider>
    </>
  );
};

export default App;
/* if there is a variable we need to use it in all the page or many component so we need Context,like language :it effect onallthe pag */
/* it is not easy to mainatn the code   multepletim wrapp contextprovider , */
/* big project we use Redux :external library ,is easy to maneg the data instead of context   */