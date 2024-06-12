import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import "../App.css"
import { data } from "./data"

function BestSelling() {

  return (
    <div className='xl:px-[80px] py-[20px] bg-[#FEF4F4]'>
      <p className='text-[30px] text-black-900 mb-[22px] titleBestt '>Best Selling Books</p>
      <div className='flex gap-[5px] py-[40px]'>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}

        >

          {
            data.map((item) => {
              return (
                <SwiperSlide>
                  <div className='text-left'>
                    <img src={item.img} alt="book" />
                    <p className='moon'>{item.title}</p>
                    <p className='author'>{item.author}</p>
                    <div className='flex flex-row items-center justify-between '>
                      <div>
                        <div>
                          <i className="fa-solid fa-star iconBest"></i>
                          <i className="fa-solid fa-star iconBest"></i>
                          <i className="fa-solid fa-star iconBest"></i>
                          <i className="fa-solid fa-star iconBest"></i>
                          <i className="fa-solid fa-star-half-stroke iconBest"></i>
                        </div>
                        <p className='text-[#9498a7] text-[14px]'>(<span className='text-[12px] text-[#ff7b2e]'>120</span> Review)</p>
                      </div>
                      <div>
                        <p className='text-[25px] font-semibold text-[#ff7b2e]'>$50</p>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              )
            })
          }

        </Swiper>
      </div>
    </div>
  )
}

export default BestSelling
