import React from "react";
import { Carousel } from "react-responsive-carousel";
import slider_1 from "../img/slider_1.jpg";
import slider_2 from "../img/slider_2.jpg";
import slider_3 from "../img/slider_3.jpg";
import slider_4 from "../img/slider_4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      transitionTime={500}
    >
      <div className="carousel">
        <img src={slider_1} className="carousel__img" />
      </div>
      <div className="carousel-cell">
        <img src={slider_2} className="carousel__img" />
      </div>
      <div className="carousel-cell">
        <img src={slider_3} className="carousel__img" />
      </div>
      <div className="carousel-cell">
        <img src={slider_4} className="carousel__img" />
      </div>
    </Carousel>
  );
};

export default Slider;
