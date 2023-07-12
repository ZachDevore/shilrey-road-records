import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Product from './Product';

const records = [
  {
    id: 1,
    title: 'Hybrid Theory',
    artist: 'Linking Park',
    price: '$9.99',
    image:
      'https://i.etsystatic.com/26921815/r/il/ba68f9/4908499829/il_1140xN.4908499829_jirb.jpg',
  },
  {
    id: 2,
    title: 'Meteora',
    artist: 'Linkin Park',
    price: '$14.99',
    image:
      'https://i.ebayimg.com/images/g/AXMAAOSwaN9iq2bN/s-l1600.jpg',
  },
  {
    id: 3,
    title: 'Collision Course',
    artist: 'Linkin Park',
    price: '$12.99',
    image:
      'https://m.media-amazon.com/images/I/91nTJH8vAAL._SL1500_.jpg',
  },
];

const ProductCarousel = () => {
    return (
      <Carousel className="flex justify-center">
        <Carousel.Item>
          <div className="flex justify-between">
            {records.map((record) => (
              <div key={record.id} className="flex-shrink-0">
                <Product record={record} />
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    );
  };
  

export default ProductCarousel;
