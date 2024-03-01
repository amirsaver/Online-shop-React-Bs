import { Button, Col, Stack } from "react-bootstrap";
import { sharedCtx } from "../components/ctx"
import { useContext, } from "react"


export default function Cart() {

  const {cartItems, setCartItems} = useContext(sharedCtx)

  const addQuantity = (product, color) => {
    const index = cartItems.findIndex((item) => item.id === product.id && item.color === color);

      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity += 1;
      setCartItems(updatedCartItems);
    }

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

    return (<>
      {!cartItems?.length && <h5 className="ms-5">There is no Item in your cart</h5>} 
      <Col className="col" style={{ width:'min(20rem, 90%)'  }}>
        {cartItems.map((item, idx) => (
          <Stack
            direction="horizontal"
            className="mt-2 ms-5 align-items-center"
            key={idx}
            style={{ width: "90%", justifyContent: "space-between" }}
          >
            <img
              src={Array.isArray(item.img) ? item.img[0] : item.img}
              style={{ width: "9rem" }}
            />
            <div className="me-auto fs-5" style={{ width: "auto" }}>
              <strong>{item.name}</strong> 
              <span className="text-muted fs-6"> x {item.quantity} </span>
              <div className="text-muted fs-5">{item.color}</div>
              <div className="text-muted fs-6">{item.price} $</div>
            </div>
            <div>{item.price * item.quantity} $ </div>
            <Button
              onClick={() => removeFromCart(item.id, item.color)}
              style={{ width: "4rem", marginLeft: "1rem" }}
              className="btn-danger"
            >
              -
            </Button>
            <Button
              onClick={() => addQuantity(item, item.color)}
              style={{ width: "4rem", marginLeft: "1rem" }}
              className="fs-4 p-0"
            >
              +
            </Button>
            
          </Stack>
          
        ))}
         <br></br>
  <hr width='90%'></hr>
  <strong>Total Price: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}$</strong>
      </Col>
   
      </>
    );
  }
