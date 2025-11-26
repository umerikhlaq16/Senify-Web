import React from "react";
import Slider from "react-slick";

import pic5 from "../assets/images/pic5.jpg";
import pic3 from "../assets/images/pic3.jpg";
import pic4 from "../assets/images/pic4.jpg";
import picb from "../assets/images/picb.jpg";
import pice from "../assets/images/pice.jpg";
import picf from "../assets/images/picf.jpg";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img 
          src={pic4} 
          alt="Family" 
          className="w-full h-[580px] object-cover rounded-lg"
        />
      </div>
      <div>
        <img 
          src={pic5} 
          alt="Family" 
          className="w-full h-[580px] object-cover rounded-lg"
        />
      </div>
         <div>
        <img 
        src={pic3}
          alt="Faimly" 
          className="w-full h-[580px] object-cover rounded-lg"
        />
        </div>
        <div>
        <img 
          src={picb} 
          alt="Family" 
          className="w-full h-[580px] object-cover rounded-lg"
        />
      </div>
      <div>
        <img 
          src={pice} 
          alt="Family" 
          className="w-full h-[580px] object-cover rounded-lg"
        />
      </div>
         <div>
        <img 
        src={picf}
          alt="Faimly" 
          className="w-full h-[580px] object-cover rounded-lg"
        />
        </div>
    </Slider>
  );
}