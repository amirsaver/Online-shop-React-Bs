import { Card} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function ProdItem({ img, name, description, price, id, group }) {
  const location = useLocation().pathname
 
   let address = location.endsWith('home') ? '/products'+'/'+group : location;
  
  return ( 
    <Card style={{ width: '18rem',height:'28rem', margin:'0.9rem', position:'relative' }}>
      <Link to={`http://localhost:5173${address}/${id}`}><Card.Img variant="top" src={img} /></Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
           <Card.Text  style={{ height:'5rem', overflow: 'hidden' }}>
                     {description}
           </Card.Text>
        <Card.Title style={{ bottom: '0.7rem' , position:'absolute',
         marginTop:'auto', left: '50%', transform: 'translateX(-50%)'  }}>{price + '$'}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default ProdItem;
// `require(${img}).default`