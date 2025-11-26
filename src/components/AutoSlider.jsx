import React from "react";
import Slider from "react-slick";

import pic5 from "../assets/images/pic5.jpg";
import pic3 from "../assets/images/pic3.jpg";
import pic4 from "../assets/images/pic4.jpg";
import picb from "../assets/images/picb.jpg";
import pice from "../assets/images/pice.jpg";
import picz from "../assets/images/picz.jpg";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#3b0764",
        color: "white",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        zIndex: 1,
        right: "20px",  // Move 20px from right edge
      }}
      onClick={onClick}
    >
      &gt;
    </div>
  );
};



// Custom Previous Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#3b0764",
        color: "white",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        zIndex: 1,
        left: "20px", // Move 20px from left edge
      }}
      onClick={onClick}
    >
      &lt;
    </div>
  );
};

export default function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Change slide every 3 seconds
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom prev arrow
  };

  const images = [pic5, pic4, pic3, picb, pice, picz];

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index}>
          <img
            src={img}
            alt="Family"
            className="w-full h-[580px] object-cover rounded-lg"
          />
        </div>
      ))}
    </Slider>
  );
}
