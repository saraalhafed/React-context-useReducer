import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Profile from './components/Profile';
import LoginForm from './components/LoginForm';

const LoginExample = () => {
  return (
    <>
      <Header />
      <Container>
        <LoginForm />
        <Profile />
      </Container>
    </>
  );
};

export default LoginExample;
