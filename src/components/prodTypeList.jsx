import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import swim from '../images/swim.jpg'
import martial from '../images/martial.jpg'

const style = {width: '44rem'}

function ProdTypeList() {


  return (
    <>
    <Card className='mt-4' style={style}>
        <Link to='http://localhost:5173/products/swimming'> <Card.Img  variant="top" src={swim} /> </Link>
        <Card.Body>
            <Card.Title>Swimming Products</Card.Title>
        
        </Card.Body>
      </Card>
      <Card className='mt-4' style={style}>
      <Link to='http://localhost:5173/products/martial'> <Card.Img variant="top" src={martial} /> </Link>
      <Card.Body>
      <Card.Title>Martial Arts Products</Card.Title>
     
      </Card.Body>
    </Card>
    </>
  )
}

export default ProdTypeList

// as={Link} to={'http://localhost:5173/products/swimming'} 