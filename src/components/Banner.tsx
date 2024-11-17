import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import slider_Image1 from '../images/slider/slide1.jpg'
import slider_Image2 from '../images/slider/slide2.jpg'
import slider_Image3 from '../images/slider/slide3.jpg'
import slider_Image4 from '../images/slider/slide4.jpg'
import slider_Image5 from '../images/slider/slide5.jpg'
import slider_Image6 from '../images/slider/slide6.jpg'
import slider_Image7 from '../images/slider/slide7.jpg'
import slider_Image8 from '../images/slider/slide8.jpg'

const Banner = () => {
  return (
    <div className='relative'>
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} interval={3000}>
        <div className='relative'>
            <Image priority src={slider_Image1} alt='slider1'/>
        </div>
        <div className='relative'>
            <Image  src={slider_Image2} alt='slider2'/>
        </div>
        <div className='relative'>
            <Image  src={slider_Image3} alt='slider3'/>
        </div>
        <div className='relative'>
            <Image  src={slider_Image4} alt='slider4'/>
        </div>
        <div className='relative'>
            <Image  src={slider_Image5} alt='slider5'/>
        </div>
        <div className='relative'>
            <Image  src={slider_Image6} alt='slider6'/>
        </div>
        <div className='relative'>
            <Image  src={slider_Image7} alt='slider7'/>
        </div>
        <div className='relative'>
            <Image  src={slider_Image8} alt='slider8'/>
        </div>
     </Carousel>

     <div className='w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20'>
     </div>
    </div>

  )
}

export default Banner