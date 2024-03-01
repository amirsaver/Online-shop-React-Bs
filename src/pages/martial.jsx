
import { Outlet, useLocation } from 'react-router-dom';
import ProdItem from '../components/prod-Item'
import images from '../images/1x1'

export const data = [
  {
    id: 'glove1',
    name: 'Glove 1',
    img: images.img1,
    price: 19.99,
    description: 'A high-quality glove for all your needs.',
    colors: ['white', 'red', 'green'],
    group:'martial',
  },
  {
    id: 'glove2',
    name: 'Glove 2',
    img: images.img2,
    price: 25.99,
    description: 'A durable glove that is perfect for heavy use.',
    colors: ['black', 'yellow', 'green', 'red'],
    group:'martial'
  },
  {
    id: 'glove3',
    name: 'Glove 3',
    img: images.img5,
    price: 14.99,
    description: 'A basic glove that gets the job done.',
    colors: ['white', 'black'],
    group:'martial'
  },
  {
    id: 'glove4',
    name: 'Glove 4',
    img: images.img7,
    price: 34.99,
    description: 'A flexible glove that adapts to your needs.',
    colors: ['yellow', 'green', 'blue'],
    group:'martial'
  },
  {
    id: 'glove5',
    name: 'Glove 5',
    img: images.img9,
    price: 22.99,
    description: 'A lightweight glove that is perfect for summer.',
    colors: ['white', 'blue'],
    group:'martial'
  },
  {
    id: 'glove6',
    name: 'Glove 6',
    img: images.img11,
    price: 27.99,
    description: 'A durable glove that can withstand any challenge.',
    colors: ['red', 'green', 'blue'],
    group:'martial'
  },
];

function Martial() {
  const location = useLocation().pathname
  return (
    <>
    {location.endsWith('martial') && <><h1>martial products</h1>
    <div
      className="d-flex align-items-center d-inline-block position-relative "
      style={{ width: "99%", flexWrap: "wrap" }}
    >
      {data.map((product, idx) => (
        <ProdItem
          id={product.id}
          key={idx}
          name={product.name}
          img={Array.isArray(product.img) ? product.img[0] : product.img }
          price={product.price}
          description={product.description}
        />
      ))}
    </div> 
    </>}
    <Outlet/>
    
    </>
  )
}

export default Martial