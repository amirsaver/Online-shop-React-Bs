import Carousel from 'react-bootstrap/Carousel';
import fin3 from '../images/fin3.jpg'
import surf from '../images/surf.jpg'
import goggle from '../images/goggle.jpg'
import ProdList from '../components/prodList';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

export default function Home() {
  return ( <>
    <Col className="position-relative">
    <Carousel data-bs-theme="light" className="pt-3 d-block row mx-auto" style={{maxWidth: '800px' }}>
      <Carousel.Item>
        <Link to={'http://localhost:5173/products/swimming'}><img
          className="d-block w-100 rounded"
          src={goggle}
          alt="First slide"
        /></Link>
        <Carousel.Caption style={{ color: 'blue' }}>
          <h3>Goggles</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to={'http://localhost:5173/products/swimming'}><img
          className="d-block w-100 rounded"
          src={fin3}
          alt="Second slide"
        /></Link>

        <Carousel.Caption style={{ color: 'yellow' }}>
          <h3>Swimming fin</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to={'http://localhost:5173/products/swimming'}><img
          className="d-block w-100 rounded"
          src={surf}
          alt="Third slide"
        /></Link>

        <Carousel.Caption style={{ color: 'yellow' }}>
          <h3>Surfing Board</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
   
   <ProdList className="row mt-4"/>
   </Col>
   </>
  );
}
