import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_one from '../../../resources/images/slide_one.jpg';
import slide_two from '../../../resources/images/slide_two.jpg'
import slide_three from '../../../resources/images/slide_three.jpg' 

const Carousel = ()=>{


    return(
        <>
        <Slider dots={false} infinite={true} autoplay={true} speed={500}>
             <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_one})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_two})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_three})`,
                            height:`${window.innerHeight}px`
                        }}
                    ></div>
                </div>
        </Slider>
        </>

    )
}

export default Carousel;