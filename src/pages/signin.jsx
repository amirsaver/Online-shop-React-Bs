import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { Link  } from 'react-router-dom';
import { useContext } from 'react';
import { sharedCtx } from '../components/ctx';


function SignIn() {

  const {login} = useContext(sharedCtx)
  return (
        <Form style={{width: '80%', maxWidth: '500px'}} className=' mt-2 shadow p-3 d-flex flex-column justify-content-center'>
          <Form.Group as={Row} className="mb-3 mt-5" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control type="email" placeholder="name@example.com"  />
            </Col>
          </Form.Group>
    
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <Button succuss className='mt-3' onClick={login}>Sign in</Button>
          <br></br>
          <p className=' mt-5 mb-0'>If you don't have an account create one</p>
          <Link to="http://localhost:5173/signup" className="mt-0 bold fs-3 ">create account</Link>
        </Form>
  );
}

export default SignIn;

// align-items-center