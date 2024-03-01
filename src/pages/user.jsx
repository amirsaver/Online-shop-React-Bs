import {  Image, Col, Container, Row } from 'react-bootstrap';
import userImg from '../images/amir.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMessage, faMobile } from '@fortawesome/free-solid-svg-icons';


export default function User() {

    const fullName = "Amir fattah"
    const email = 'amirsaver@gmail.com'
    const address = "Lahijan, motaharri, 32 alley"
    const registerationDate = "2023/2/20"
    return (        

        <Container style={{ width: '40rem' }}>
              <Col className="mx-auto">
              <Row className='d-block'><Image src={userImg} roundedCircle className="my-3 mx-auto" style={{ width: '100px' }}/></Row>
              <hr width='95%'></hr>
              <Row className='mx-auto ps-4'>
                <Row>
                  <div className="d-inline-block text-end" style={{ width: "25%" }}>
                    <div className="pgTitle me-1 text-nowrap">Name:</div>
                  </div>
                  <div
                    className="d-inline-block text-center"
                    style={{ width: "75%" }}
                  >
                   <b> {fullName}</b>
                    
                  </div>
                </Row>
                <Row className="mt-2">
                  <div className="d-inline-block text-end" style={{ width: "25%" }}>
                    <div className="pgTitle  me-1 text-nowrap"> <FontAwesomeIcon icon={faMobile} />:</div>
                  </div>
                  <div
                    className="d-inline-block text-center"
                    style={{ width: "75%" }}
                  >
                    <b>+98-9112446018</b>
                  </div>
                </Row>

                <Row className='my-2'>
                  <div className="d-inline-block text-end" style={{ width: "25%" }}>
                    <div className="pgTitle me-1 text-nowrap"> <FontAwesomeIcon icon={faEnvelope}/>:</div>
                  </div>
                  <div
                    className="d-inline-block text-center"
                    style={{ width: "75%" }}
                  >
                    {email} 
                    
                  </div>
                </Row>

                <Row className="mt-1">
                  <div className="d-inline-block text-end" style={{ width: "25%" }}>
                    <div className="pgTitle  me-1 text-nowrap">Address:</div>
                  </div>
                <div
                    className="d-inline-block text-center"
                    style={{ width: "75%" }}
                  >
                    {address}
                </div>
                </Row>
                <Row className="mt-1">
                  <div className="d-inline-block text-end" style={{ width: "25%" }}>
                    <div className="pgTitle  me-1 text-nowrap">Registeration Date:</div>
                  </div>
                  <div
                    className="d-inline-block text-center ps-3"
                    style={{ width: "75%" }}
                  >
                    <span>{registerationDate}</span>
                  </div>
                </Row>
                </Row>
              </Col>
            </Container>

    );
  }