import React from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./style.css";



const Tabs = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
    >
      
      <SwiperSlide className='SwiperSlide'>
        
        <p className="py-2">
          Pranie chemiczne materaca
        </p>

        <Image
          className='swiper__image'
          src="/assets/materaca.jpg"
          alt="materaca"
          width={1280}
          height={720}
          priority
        />

      </SwiperSlide>
      
      <SwiperSlide className='SwiperSlide'>
        
        <p className="py-2">
          Pranie chemiczne mebli
        </p>

        <Image
          className='swiper__image'
          src="/assets/mebli.jpg"
          alt="mebli"
          width={1280}
          height={720}
          priority
        />

      </SwiperSlide>
      
      <SwiperSlide className='SwiperSlide'>
        
        <p className="py-2">
          Pranie chemiczne dywanu
        </p>

        <Image
          className='swiper__image'
          src="/assets/duwanu.jpg"
          alt="duwanu"
          width={1280}
          height={720}
          priority
        />

      </SwiperSlide>
      
      <SwiperSlide className='SwiperSlide'>
        
        <p className="py-2">
          Pranie wykładzin biurowych
        </p>

        <Image
          className='swiper__image'
          src="/assets/biurowych.jpg"
          alt="biurowych"
          width={1280}
          height={720}
          priority
        />

      </SwiperSlide>

    </Swiper>
  )
}

export default Tabs;