import React from 'react';
import { Container } from 'react-bootstrap';
import AddForm from './components/AddForm';
import NoteList from "./components/NoteList"
const ContextExample = () => {
  return <div>

    <Container>

        <AddForm/>
        <NoteList/>

    </Container>
  </div>;
};

export default ContextExample;
