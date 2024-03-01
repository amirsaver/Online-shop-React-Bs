import { Link, useParams } from "react-router-dom"
import {data as swimData}  from '../pages/swim'
import {data as martialData}  from '../pages/martial'
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { sharedCtx } from "./ctx"
import { useContext, useRef, useState } from "react"
import ProdPgColor from "./prodPgColor"
import ProdFeature from "./prodFeature"


function ProdPage() {
  const prodId = useParams().id;
  const product = swimData.filter((x) => x.id === prodId)[0] || martialData.filter((x) => x.id === prodId)[0];
  const myRef = useRef(); 
  const [imgSrc, setImgSrc] = useState(Array.isArray(product.img) ? product.img[0] : product.img );
  const images = (Array.isArray(product.img) ? product.img : [product.img]);
  
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

const handleColorChange = (e) => setSelectedColor(e.target.value);

  const {cartItems, setCartItems} = useContext(sharedCtx)

  const addToCart = (product, selectedColor) => {
    const index = cartItems.findIndex((item) => item.id === product.id && item.color === selectedColor);

    if (index !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // If the item doesn't exist in the cart, add a new item with the selected color and quantity 1
      setCartItems([...cartItems, { ...product, color: selectedColor, quantity: 1 }]);
    }
  };

  const removeFromCart = (id, color) => {
    const index = cartItems.findIndex((item) => item.id === id && item.color === color);
  
    if (index !== -1) {
      const updatedCartItems = [...cartItems];
  
      if (updatedCartItems[index].quantity > 1) {
        updatedCartItems[index].quantity -= 1;
      } else {
     
        updatedCartItems.splice(index, 1);
      }
      setCartItems(updatedCartItems);
    }
  };
 
  const imgClickHandler = (x, idx) => {
     setImgSrc(x); 
     Array.from(myRef.current.children).forEach(img => {
        img.classList.remove('active');
    })
     myRef.current.children[idx].classList.add('active')
     }

     const checkItem = (product, selectedColor) => {
      const index = cartItems.findIndex((item) => item.id === product.id && item.color === selectedColor);
      if (index !== -1) {
        return cartItems[index].quantity
        }
          return false
       }

  return (
    <div>
      <Container className="d-flex flex-wrap justify-content-center">
        <Col
          lg={6}
          className="mx-1"
          style={{ boxSizing: "border-box", width: "min(550px ,90%)" }}
        >
          <Card className="mt-4 pt-0 ">
            <Card.Img variant="top" src={imgSrc} />

            <div ref={myRef} style={{ width: "100%" }} className="img-Group">
              {images.map((x, idx) => (
                <img
                  key={idx}
                  src={x}
                  className="img pt-0"
                  style={{
                    width: "50px",
                    margin: "10px",
                    borderRadius: "5px",
                    border: "1px solid gray",
                    opacity: ".8",
                  }}
                  onClick={() => imgClickHandler(x, idx)}
                />
              ))}
            </div>
          </Card>
        </Col>
        <Col
          lg={6}
          style={{ boxSizing: "border-box", width: "min(550px ,90%)" }}
        >
          <Card className="mt-4 pt-0">
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <hr
                width="80%"
                className="mx-auto bg-light"
                style={{ borderColor: "#7c7c7c" }}
              ></hr>
              <Card.Text>{product.description}</Card.Text>
              <hr
                width="80%"
                className="mx-auto"
                style={{ borderColor: "#7c7c7c" }}
              ></hr>
              <p>
                Price: <b>{product.price}$</b>
              </p>
              <hr
                width="80%"
                className="mx-auto"
                style={{ borderColor: "#7c7c7c" }}
              ></hr>
            </Card.Body>

            <ProdPgColor
              handleColorChange={handleColorChange}
              selectedColor={selectedColor}
              colors={product.colors}
            />
            {!checkItem(product, selectedColor) ? (
              <Button
                style={{ width: "20rem", margin: "auto", marginTop: "2rem" }}
                onClick={() => addToCart(product, selectedColor)}
              >
                Add to cart
              </Button>
            ) : (
              <div>
                <Button
                  style={{ width: "6rem", margin: "auto", marginTop: "2rem" }}
                  className="btn-danger me-2"
                  onClick={() => removeFromCart(product.id, selectedColor)}
                >
                  -
                </Button>
                {checkItem(product, selectedColor) + " in Cart"}
                <Button
                  style={{ width: "6rem", margin: "auto", marginTop: "2rem" }}
                  className="ms-2"
                  onClick={() => addToCart(product, selectedColor)}
                >
                  +
                </Button>
              </div>
            )}
            <hr
              width="80%"
              className="mx-auto"
              style={{ borderColor: "#7c7c7c" }}
            ></hr>

            <Container>
              <Col>
                <Row>
                  <div className="d-inline-block" style={{ width: "21%" }}>
                    <div className="pgTitle me-1 text-nowrap">Postage:</div>
                  </div>
                  <div
                    className="d-inline-block text-start"
                    style={{ width: "79%" }}
                  >
                    <b>
                      AU $26.00 International Standard : tracked-signature (7 to
                      15 business days). <Link className="fw-normal">See details</Link> 
                    </b>
                    <small className="d-block text-muted">
                      International delivery of items may be subject to customs processing and additional charges.
                      Located in: Cotton Tree, Australia</small>
                  </div>
                </Row>
                <Row className="mt-1">
                  <div className="d-inline-block" style={{ width: "21%" }}>
                    <div className="pgTitle  me-1 text-nowrap">Delivery:</div>
                  </div>
                  <div
                    className="d-inline-block text-start"
                    style={{ width: "79%" }}
                  >
                    <b>Estimated between Mon, 24 Jul and Wed, 2 Aug to 59100</b>
                    <small className="d-block text-muted">
                      Please allow additional time if international delivery is subject to customs processing.</small>
                  </div>
                </Row>
                <Row className="mt-1">
                  <div className="d-inline-block" style={{ width: "21%" }}>
                    <div className="pgTitle  me-1 text-nowrap">Returns:</div>
                  </div>
                  <div
                    className="d-inline-block text-start"
                    style={{ width: "79%" }}
                  >
                    <div>14-day returns. Buyer pays for return postage. See details</div>
                  </div>
                </Row>
              </Col>
            </Container>
          </Card>
        </Col>
      </Container>
      <ProdFeature/>
    </div>
  );
}

export default ProdPage