import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Clarusway Systems</Navbar.Brand>
        <Nav className="ms-auto">
          <Button variant="warning" size="sm">
            {' '}
            Login{' '}
          </Button>
          <Button variant="warning" size="sm">
            {' '}
            Logout{' '}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
