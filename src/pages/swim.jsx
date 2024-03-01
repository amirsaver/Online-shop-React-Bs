import images from '../images/swim'
import ProdItem from '../components/prod-Item'
import { Outlet, useLocation } from 'react-router-dom';

export const data = [
  {
    id: 'sf03',
    name: 'Speed Fins 3',
    img: [images.fin5,images.fin4,images.fin6],
    price: 59.99,
    description: 'A high-performance swim fin designed for competitive swimmers.',
    colors: ['green', 'blue', 'white','black'],
    group: 'swimming'
  },
  {
    id: 'gog01',
    name: 'Goggle 3',
    img: [images.goggle2,images.goggle3],
    price: 39.99,
    description: 'A stylish goggle that provides excellent protection.',
    colors: ['black', 'white'],
    group: 'swimming'
  },
  {
    id: 'gog02',
    name: 'Goggle 4',
    img: [images.goggle8, images.goggle5,images.goggle6,images.goggle7,images.goggle4],
    price: 29.99,
    description: 'A high-end goggle for the serious athlete.',
    colors: ['black','yellow', 'green', 'white'],
    group: 'swimming'
  },
  {
    id: 'gog05',
    name: 'Goggle 12',
    img: [images.goggle11, images.goggle12, images.goggle10,images.goggle9],
    price: 44.99,
    description: 'A comfortable goggle that provides clear vision.',
    colors: ['red', 'blue', 'white', 'green'],
    group: 'swimming'
  },
  {
    id: 'gog06',
    name: 'Goggle 14',
    img: [images.goggle14, images.goggle13, images.goggle15],
    price: 59.99,
    description: 'A high-performance goggle for competitive swimmers.',
    colors: ['green','white', 'blue', 'yellow'],
    group: 'swimming'
  },
  {
    id: 'gog07',
    name: 'Goggle 17',
    img: [images.goggle17, images.goggle16],
    price: 69.99,
    description: 'A premium goggle with advanced features for serious swimmers.',
    colors: ['green', 'black', 'white'],
    group: 'swimming'
  },
  {
    id: 'gog08',
    name: 'Goggle 19',
    img: [images.goggle19, images.goggle18],
    price: 49.99,
    description: 'A high-performance goggle with anti-fog and UV protection.',
    colors: ['red', 'blue', 'white'],
    group: 'swimming'
  },
  {
    id: 'gog09',
    name: 'Goggle 21',
    img: images.goggle21,
    price: 89.99,
    description: 'A premium goggle with advanced optics and hydrodynamic features.',
    colors: ['black', 'green'],
    group: 'swimming'
  },
  {
    id: 'wvr01',
    name: 'Wave Rider 1',
    img: images.fin1,
    price: 499.99,
    description: 'A high-performance surfboard designed for experienced surfers.',
    colors: ['blue', 'white', 'yellow'],
    group: 'swimming'
  },
  {
    id: 'bb02',
    name: 'Beginner Board 2',
    img: images.fin2,
    price: 349.99,
    description: 'A stable and easy-to-ride surfboard that is perfect for beginners.',
    colors: ['red', 'yellow', 'green'],
    group: 'swimming'
  },
  {
    id: 'bw05',
    name: 'Big Wave 5',
    img: images.fin3,
    price: 999.99,
    description: 'A specially designed surfboard for riding big waves.',
    colors: ['black', 'white'],
    group: 'swimming'
  },
  {
    id: 'f07',
    name: 'Fin 7',
    img: images.fin7,
    price: 79.99,
    description: 'A high-quality fin for both training and competition.',
    colors: ['red', 'blue', 'green'],
    group: 'swimming'
  },
  {
    id: 'gog17',
    name: 'Goggle 1',
    img: [images.goggle1],
    price: 29.99,
    description: 'A basic goggle for casual swimmers.',
    colors: ['black', 'white'],
    group: 'swimming'
  },
  {
    id: 'gog21',
    name: 'Goggle1p',
    img: [images.goggle1p, images.goggle2p,images.goggle3p,images.goggle4p],
    price: 24.99,
    description: 'A comfortable and adjustable goggle for a perfect fit.',
    colors:['yellow', 'green'],
    group: 'swimming'
  },
  {
    id: 'nplg1',
    name: 'Nose Plug 1',
    img: images.nosePlug,
    price: 5.99,
    description: 'A basic nose plug for keeping water out of your nose during water activities.',
    colors: ['blue', 'white'],
    group: 'swimming'
  },
  {
    id: 'nplg2',
    name: 'Nose Plug 2',
    img: images.nosePlug2,
    price: 14.99,
    description: 'A comfortable and adjustable nose plug that provides a secure fit.',
    colors: ['red', 'black'],
    group: 'swimming'
  }
];

function Swim() {
  const location = useLocation().pathname
  return (
    <>
    {location.endsWith('swimming') && <><h1>Swim products</h1>
    <div
      className="d-flex align-items-center justify-content-center d-inline-block position-relative "
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

export default Swim