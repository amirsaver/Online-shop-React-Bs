import  { useState } from 'react';
import { Container, Row, Col, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import ColorRadioButtons from './colors';

function Filter() {
  const [showFilters, setShowFilters] = useState(false);
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState([0, 100]);
  const [size, setSize] = useState("");
  const [type, setType] = useState("");

const handleBrandChange = (e) => setBrand(e.target.value);
const handleColorChange = (e) => setColor(e.target.value);
const handlePriceChange = (e) => setPrice(e.target.value);
const handleSizeChange = (e) => setSize(e.target.value);
const handleTypeChange = (e) => setType(e.target.value);

const price0Handler = (e) => {
    if (+e.target.value <= +price[1]) {
      setPrice([e.target.value, price[1]]);
    } else {
        setPrice([e.target.value, e.target.value])
      }}

  const price1Handler = (e) => {
    if (+e.target.value >= +price[0]) {
        setPrice([price[0], e.target.value]);
      } else {
        setPrice([e.target.value, e.target.value])
      }}

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <Container className='shadow ms-2 mt-2 mx-md-auto mx-sm-auto' style={{ maxWidth: '330px', minWidth:'266px', borderRadius: '6px',  borderColor: '#cacaca',
    borderWidth: '1px',
    borderStyle: 'solid'}}>
      <Row className={''}>
        {/* Show the filtering section on large screens */}
        <Col lg={12} className={`my-3 ${showFilters ? 'd-block' : 'd-none d-lg-block'}`}>
       
    <Row className="justify-content-center">
      <Col xs={12}  className="filter-sidebar">
  
        <Form>
          {/* Brand */}
          <Form.Group controlId="brandSelect" className='mt-2 '>
            <Form.Label>Brand: <b>{brand}</b></Form.Label>
            <Form.Select  value={brand} onChange={handleBrandChange}> 
            <option value="">Select a brand</option>
            <option value="Adidas">Adidas</option>
            <option value="Puma">Puma</option>
            <option value="Nike">Nike</option>
            </Form.Select>
          </Form.Group>

          {/* Color */}
          <Form.Group controlId="colorSelect" className='mt-4'>
            <Form.Label> <Button onClick={() => setColor('')} className='me-5'>Any Color</Button>
              Color: <b className=''> {color}</b></Form.Label>
            <ColorRadioButtons handleColorChange={handleColorChange} selectedColor={color}/>
          </Form.Group>

          {/* Price */}
          <Form.Group controlId="priceRange" className='mt-4'>
            <Form.Label><p className='me-2 d-inline'>Price :</p> <b>$ {price[0] + ' to ' +price[1]}</b> </Form.Label>
            <InputGroup>
              <FormControl type="number" value={price[0]} onChange={(e) => setPrice([e.target.value, price[1]])} onBlur={price0Handler} />
              <InputGroup.Text>{'>'}</InputGroup.Text>
              <FormControl type="number" value={price[1]} onChange={(e) => setPrice([price[0], e.target.value])} onBlur={price1Handler} />
            </InputGroup>
          </Form.Group>

          {/* Size */}
          <Form.Group controlId="sizeSelect" className='mt-3'>
            <Form.Label>Size: {size}</Form.Label>
            <Form.Select value={size} onChange={handleSizeChange}>
              <option value="Medium">Medium</option>
              <option value="Small">Small</option>
              <option value="Large">Large</option>
              <option value="XX-Large">XX-Large</option>
              {/* Add your size options here */}
            </Form.Select>
          </Form.Group>

          {/* Type */}
          <Form.Group controlId="typeSelect" className='mt-3'>
            <Form.Label>Type: {type}</Form.Label>
            <Form.Select value={type} onChange={handleTypeChange}>
              <option value="">Select a type</option>
              <option value="Swim">Swim</option>
              <option value="Martial">Martial</option>
              {/* Add your type options here */}
            </Form.Select>
          </Form.Group>
          <Button succuss className='mt-3'>Apply Filter</Button>
        </Form>
      </Col>
    
    </Row>

        </Col>
        {/* Show a button to toggle the filtering section on smaller screens */}
        <Col xs={12} className="text-center d-lg-none">
          <Button size='sm' onClick={handleToggleFilters} style={{backgroundColor: 'gray', width: "100%"}}>
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Filter;