import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "../styles/Slider.css"
import cardImage from "../img/card_image.jpg"
import cardImage2 from "../img/card_image2.jpg"
import cardImage3 from "../img/card_image3.jpg"

export default function Slider() {
  return (
    <section className='Slider'>
      <div className="container">
        <h2 className='slider-title'>Cars</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          
          <SwiperSlide className='slider'>
            <img src={cardImage} className="slider-imgage" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cardImage2} className="slider-imgage" alt="" />
            
          </SwiperSlide>

          <SwiperSlide>
            <img src={cardImage3} className="slider-imgage" alt="" />
            
          </SwiperSlide>

          <SwiperSlide>
            <img src={cardImage} className="slider-imgage" alt="" />
               
          </SwiperSlide>

          <SwiperSlide>
            <img src={cardImage3} className="slider-imgage" alt="" />

          </SwiperSlide>

          <SwiperSlide>
            <img src={cardImage2} className="slider-imgage" alt="" />

          </SwiperSlide>
        
          
        </Swiper>
      </div>
    </section>
  )
}
