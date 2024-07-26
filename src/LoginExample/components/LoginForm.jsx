import { useReducer, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { LOGIN_ACTIONS, LoginReducer, initialState } from './LoginReducer';

const LoginForm = () => {
  const { login } = useAuth();   /* we take it from our context custom */

  // const [email, setEmail] = useState('');
   // const [password, setPassword] = useState('');
  const [email, dispatchEmail] = useReducer(LoginReducer, initialState);
 
  const [password, dispatchPassword] = useReducer(LoginReducer, initialState);

  const submitHandler = (e) => {
    e.preventDefault();
    let isError = false;     /* without this variable i canot login */
      /* with validation useReducer:handel errror but sue state just update  */
    if (email.value.length < 6) {
      dispatchEmail({
        type: LOGIN_ACTIONS.ERROR,
        payload: 'email should have more than 6 chars',
      });
      isError = true;
    }

    if (password.value.length < 6) {
      dispatchPassword({
        type: LOGIN_ACTIONS.ERROR,
        payload: 'password should have more than 6 chars',
      });
      isError = true;
    }

    if (!isError) login(email.value); /* if no error login */
  };


  return (
    <Card className="shadow mt-5" style={{ width: '400px', margin: 'auto' }}>
      <Card.Body>
        <Form onSubmit={submitHandler}>
          <h1 className="text-center mb-3">Login</h1>
          <Form.Control
            type="text"
            placeholder="Enter your email"
            className="mb-3"
            value={email.value}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={(e) =>
              dispatchEmail({
                type: LOGIN_ACTIONS.INPUT,
                payload: e.target.value,
              })
            }
          />

          {email.error && <small className="text-danger">{email.error}</small>}

          <Form.Control
            type="password"
            placeholder="Enter your password"
            className="mb-3"
            value={password.value}
            // onChange={(e) => setPassword(e.target.value)}
            onChange={(e) =>
              dispatchPassword({
                type: LOGIN_ACTIONS.INPUT,
                payload: e.target.value,
              })
            }
          />

          {password.error && (
            <small className="text-danger">{password.error}</small>
          )}

          <div className="text-center">
            <Button variant="primary" type="submit">
              LOGIN
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
