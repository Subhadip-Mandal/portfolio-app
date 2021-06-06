import "./carousel.css";
import { useState } from "react";
import Slider from "react-slick";
import Card from "./card/card.js";
import Card2 from "./card/card2";
import Card3 from "./card/card3";
import Card4 from "./card/card4";
import Card5 from "./card/card5";
import Card6 from "./card/card6";
import Card7 from "./card/card7";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [<Card />, <Card2 />, <Card3 />, <Card4 />, <Card5 />, <Card6 />, <Card7 />];

function Carousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Carousel">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
           <item>{img}</item>
           </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;