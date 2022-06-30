import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Slider.css";

import Slider from "react-slick";

export default function Carousel() {
  const arr = ['https://uidesign.gbtcdn.com/GB/image/9534/Smart+Watches+PC+1190X420+EN.jpg',
  'https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg',
  ]
  const renderSlides = () =>
    arr.map(num => (
      <div key={num} >
        <img style={{width:'912px'}} src={num} />
      </div>
    ));

  return (
    <div  style={{maxWidth:'912px'}} className="Appy">
      <Slider dots={true}>{renderSlides()}</Slider>
    </div>
  );
}

