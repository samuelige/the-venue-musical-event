import React from 'react'
import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import firstSlide from '../../assets/p1.jpg'
import secondSlide from '../../assets/p2.jpg'
import thirdSlide from '../../assets/p3.jpg'

const Carrousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true
    };

    return (
        <div className="overflow-hidden">
            <Slider {...settings}>
                <div className="text-white">
                    <img loading='lazy' src={firstSlide} alt="First Slide" className="w-full h-customHeight2 md:h-5/6 lg:h-screen" />
                </div>
                <div className="">
                    <img loading='lazy' src={secondSlide} alt="First Slide" className=" w-full h-customHeight2 md:h-5/6 lg:h-screen" />
                </div>
                <div className="bg-bThirdImage">
                    <img loading='lazy' src={thirdSlide} alt="First Slide" className="w-full h-customHeight2 md:h-5/6 lg:h-screen" />
                </div>
            </Slider>
        </div>
        
    )
}

export default Carrousel
