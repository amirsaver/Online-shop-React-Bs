import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Badge } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import trolley from './trolley.png';
import { NavLink  } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import { sharedCtx } from './ctx';
import Modall from './modal';

function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
const {cartItems, isLoggedIn} = useContext(sharedCtx)

 const totalItems = cartItems.reduce((total, item) =>{
  return total + item.quantity
 }, 0)

 const imgRef = useRef(null);
 const [prevTotalItems, setPrevTotalItems] = useState(totalItems);

 useEffect(() => {
   if (totalItems > prevTotalItems) {
     imgRef.current.classList.add('cart-badge', 'added');
     setTimeout(() => imgRef.current.classList.remove('added'), 200);
   } else if (totalItems < prevTotalItems) {
     imgRef.current.classList.add('cart-badge', 'removed');
     setTimeout(() => imgRef.current.classList.remove('removed'), 200);
   }
   
   setPrevTotalItems(totalItems);
 }, [totalItems]);



  return (
    <>
    <Modall handleClose={handleClose} handleShow={handleShow} show={show} head={'Log Out Really!!!'} text={'Are you sure?'}/>
    <Navbar expand="lg" className="" style={{ background: 'rgb(142 221 211'}}>
      <Container fluid>
        <Navbar.Brand to="home" as={NavLink}><FontAwesomeIcon icon={faHome}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', background:'white' }}
            navbarScroll
          >
            
            <Nav.Link to="products" as={NavLink}>Products</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Goggles</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Fins
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Surf
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="about" as={NavLink}>
              About
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="me-4">Search</Button>
          </Form>
          
          {isLoggedIn && <Nav.Link to="user" as={NavLink} className="ms-2">Hi Amir</Nav.Link>}

          {isLoggedIn ? <Nav.Link className="ms-4 pe-2 me-2" onClick={handleShow}>Log out <FontAwesomeIcon icon={faSignOut}/></Nav.Link> :
          <Nav.Link to="signin" as={NavLink} className="ms-2 me-2">Sign in <FontAwesomeIcon icon={faSignIn}/> </Nav.Link>
          }

          <span style={{ background: '#b8b8b8', width: '1px', height:'1.5rem' }}> </span>

          <Nav.Link to="cart" as={NavLink} className="position-relative ms-2">
            <img style={{ width: '40px' }} src={trolley} alt="Shopping Cart" ref={imgRef} className='cart-badge' />

              {totalItems > 0 &&
            <Badge bg="danger" className="position-relative top-0 translate-middle">
            {totalItems}
        </Badge>
      }
    </Nav.Link>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </>
  );
}

export default NavBar;