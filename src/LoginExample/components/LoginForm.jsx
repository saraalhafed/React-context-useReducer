import { Button, Card, Form } from 'react-bootstrap';

const LoginForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
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
          />

          <Form.Control
            type="password"
            placeholder="Enter your password"
            className="mb-3"
          />

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
