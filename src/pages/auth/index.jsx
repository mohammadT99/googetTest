import { useState } from "react";
import { Form , Button } from "react-bootstrap";
import Api from "../../libs/axios";
import Cookies from "js-cookie";
import { Navigate, json, redirect, useNavigate } from "react-router-dom";

const Login = () => {

  const [mobile , setMobile] = useState('');
  const [password , setPssword] = useState('');
  const navigate = useNavigate()
  // const [token , setToken] = Cookies() 
  const handleSubmit = async () => {
    const {data} = await Api.post('/auth/login', {
      mobile,
      password
    })
    const user = JSON.stringify(data);
    console.log( 'ssssvv', user);
    if(user) {
      Cookies.set('user' ,user); 
      // console.log(Cookies.get('user'));
      if(Cookies.get('user')) {
        navigate('/product')
        // console.log(Cookies.get('user'));
      }
    }
    else {
      // console.log();
    }
  
    // console.log(data , 'dd');


    // alert(email)
  }
  const handleLogout = () => {
    Cookies.remove()
  }
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
                <Form.Control onChange={(e)=> setMobile(e.target.value)} type="number" placeholder="name@example.com" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label> password</Form.Label>
                <Form.Control onChange={(e)=> setPssword(e.target.value)} type="password" placeholder="Password"/>
              </Form.Group>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>submit</button>
              {/* <Button onClick={handleSubmit} variant="primary">submit</Button>{' '} */}
              {/* <Button variant="danger">Cansel</Button>{' '} */}
              <button type="button" onClick={handleLogout} className="btn btn-danger">logout</button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
