import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Profile from './components/Profile';
import LoginForm from './components/LoginForm';
import { useAuth } from './context/AuthContext';
const LoginExample = () => {

  
  /* i need to reach the custom, to take this value  */
  const {user} = useAuth()
  return (
    <>
      <Header />
      <Container>
      {user ? <Profile /> : <LoginForm />}  {/* we need to see one of them whn there is user we see profile component if not than we shoud login */}
      </Container>
    </>
  );
};

export default LoginExample;
/* here we render one of this components    */