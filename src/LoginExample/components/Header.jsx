import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();  /* i get it from custom hoo for useContext  to see login or logout */
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Clarusway Systems</Navbar.Brand>
        <Nav className="ms-auto">
          {/* we need to see one of them login or logout */}
          {user ? (
            <Button variant="warning" size="sm" onClick={() => logout}> {/* in project router example it work because inside the AppRouters in the Rout for login we provid user={setUser} */}
              Logout
            </Button>
          ) : (
            <Button variant="warning" size="sm"> {/* at first user is null so we see just login btn and form  */}
              Login
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
