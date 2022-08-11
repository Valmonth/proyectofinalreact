import axios from 'axios';
import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

const Login = () => {

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    
    const submit = (data) => {
        axios
          .post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login", data)
          .then((res) => {
            navigate("/");
  
            localStorage.setItem("token", res.data.data.token);
          })
          .catch((error) => {
            if (error.response.status === 400) {
              alert("Credenciales inválidas");
            }
            console.log(error.response);
          });
        reset({
          email: "",
          password: ""
        });
      };
      let cat = localStorage.getItem('token');

    const logOut = () => {
      localStorage.removeItem('token')
      alert('Log Out User');
      navigate("/login")
    }
     
    
    
    return (
        <div>
           <Container>

            {cat ? 
            <>
            <h1 className='shadow-sm text-success mt-5 p-3 text-center rounded'>Are you leaving so soon?</h1>
              <Row>
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shoadow-sm rounded-lg">
  
                <Button variant="danger" onClick={() => logOut()}>LOG OUT</Button>
  
                </Col>
              </Row>
            </>
            :
              <>
              <h1 className='shadow-sm text-success mt-5 p-3 text-center rounded'>Welcome, Please log in</h1>
              <Row>
                <Col lg={5} md={6} sm={12} className="p-5 m-auto shoadow-sm rounded-lg">
  
                <Form onSubmit={handleSubmit(submit)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" {...register("email")} />
                  </Form.Group>
  
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" {...register("password")} />
                  </Form.Group>
                  <div className="d-grid gap-2">
                  <Button variant="success" size="lg" type="submit">
                      Login
                  </Button>
                  </div>
              </Form>
  
                </Col>
              </Row>
              </> 
            }
            
           </Container>

            
        </div>
    );
};

export default Login;