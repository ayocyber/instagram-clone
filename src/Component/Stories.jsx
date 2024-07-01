import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Story from "./Story";
import "../Style/stories.css"
// import HorizontalScroll from "react-scroll-horizontal";
import Slider from "react-slick";
function Stories(){
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            }
          ]
        };
    return(
        <div className="storie">
            <Slider {...settings}>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
            </Slider>
        </div>
    )
}

export default Stories