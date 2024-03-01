import {data as swimData} from '../pages/swim'
import {data as martialData} from '../pages/martial'
import ProdItem from "./prod-Item"
import images from '../images/1x1'
const data =  [
    {
      name: 'Glove 1',
      img: images.img1,
      price: 19.99,
      description: 'A high-quality glove for all your needs.'
    },
    {
      name: 'Glove 2',
      img: images.img2,
      price: 25.99,
      description: 'A durable glove that is perfect for heavy use.'
    },
    {
      name: 'Goggle 1',
      img: images.img3,
      price: 39.99,
      description: 'A stylish goggle that provides excellent protection.'
    },
    {
      name: 'Goggle 2',
      img: images.img4,
      price: 29.99,
      description: 'A comfortable goggle that is perfect for all-day wear.'
    },
    {
      name: 'Glove 3',
      img: images.img5,
      price: 14.99,
      description: 'A basic glove that gets the job done.'
    },
    {
      name: 'Goggle 3',
      img: images.img6,
      price: 49.99,
      description: 'A high-end goggle for the serious athlete.'
    },
    {
      name: 'Glove 4',
      img: images.img7,
      price: 34.99,
      description: 'A flexible glove that adapts to your needs.'
    },
    {
      name: 'Goggle 4',
      img: images.img8,
      price: 19.99,
      description: 'A stylish goggle that is affordable for all.'
    },
    {
      name: 'Glove 5',
      img: images.img9,
      price: 22.99,
      description: 'A lightweight glove that is perfect for summer.'
    },
    {
      name: 'Goggle 5',
      img: images.img10,
      price: 59.99,
      description: 'A high-performance goggle for the extreme athlete.'
    },
    {
      name: 'Glove 6',
      img: images.img11,
      price: 27.99,
      description: 'A durable glove that can withstand any challenge.'
    },
    {
      name: 'Goggle 6',
      img: images.img12,
      price: 44.99,
      description: 'A comfortable goggle that provides clear vision.'
    }
  ]

function ProdList() {
  return (
    <div
      className="d-flex align-items-center d-inline-block position-relative justify-content-center"
      style={{ width: "99%", flexWrap: "wrap" }}
    >
      {swimData.slice(0, 4).map((product, idx) => (
        <ProdItem
          id={product.id}
          key={idx}
          name={product.name}
          img={Array.isArray(product.img) ? product.img[0] : product.img }
          price={product.price}
          description={product.description}
          group={product.group}
        />
      ))}
       {martialData.slice(0, 4).map((product, idx) => (
        <ProdItem
          id={product.id}
          key={idx}
          name={product.name}
          img={Array.isArray(product.img) ? product.img[0] : product.img }
          price={product.price}
          description={product.description}
          group={product.group}
        />
      ))}
    </div>
  );
}

export default ProdList