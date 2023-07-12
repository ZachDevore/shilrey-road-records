import React, { Component } from "react";
import Slider from "react-slick";
import Product from "./Product";
import { Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default class SimpleSlider extends Component {
  render() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <div className="App">
          <Slider {...settings}>
            {records.map((item) => (
              <div className="card">
                <div className="card-top">
                  <img className='img-fluid .thumbnail'
                    src={item.image}
                    alt={'A picture should show up here'}
                  />
                  <h1>{item.title}</h1>
                  <h2>{item.artist}</h2>
                </div>
                <div className="card-bottom">
                  <h3>{item.price}</h3>
                  <Button>Add To Cart</Button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      );
    }
}
