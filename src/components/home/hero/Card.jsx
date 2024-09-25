import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const CardCarousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Change slide every 2 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map(({ id, cover, catgeory, title, authorName, time }) => (
        <div className='box' key={id}>
          <div className='img'>
            <img src={cover} alt={title} />
          </div>
          <div className='text'>
            <span className='category'>{catgeory}</span>
            <Link to={`/SinglePage/${id}`}>
              <h1 className='titleBg'>{title}</h1>
            </Link>
            <div className='author flex'>
              <span>by {authorName}</span>
              <span>{time}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CardCarousel;