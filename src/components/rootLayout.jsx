import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './navbar';
import Filter from './filter';
import { Outlet } from 'react-router-dom';
import BreadCrumb from './breadcrump';

export default function RootLayout() {
  return (
    <Container fluid>
      <NavBar/>
      <Row className="text-start"><BreadCrumb/></Row> 
      <Row>
        <Col lg={3} md={12} className="p-0"> 
          <Filter className=""/>
        </Col>
        <Col lg={9} className="p-0 bg-light d-flex justify-content-center">
          <Outlet/>
        </Col>
      </Row>
    </Container>
  );
}

