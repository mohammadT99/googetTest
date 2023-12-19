import { Form , Button } from "react-bootstrap";

const Login = () => {


  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label> password</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
              </Form.Group>

              <Button variant="primary">submit</Button>{' '}
              <Button variant="danger">Cansel</Button>{' '}
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
