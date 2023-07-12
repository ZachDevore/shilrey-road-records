import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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

function Product() {
  return (
    <div>
      {records.map((record) => (
        <Card key={record.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={record.image} />
          <Card.Body>
            <Card.Title>{record.title}</Card.Title>
            <Card.Text>
              Artist: {record.artist}
              <br />
              Price: {record.price}
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Product;