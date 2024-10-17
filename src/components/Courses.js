import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import { Coursesdata } from "./coursesdata"

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';
import { Box, Modal, Typography } from '@mui/material';

function Courses() {


    return (
        <div className='xl:px-[80px] px-[10px] py-[20px] bg-[#FEF4F4]'>
            <div className='flex xl:flex-row flex-col justify-between items-center py-[20px]'>
                <p className='text-[35px] text-[black]-500 titleBestt'>Kurslarimiz:</p>
                <div className='text-[20px] cursor-pointer flex xl:gap-4 gap-[5px]  '>
                    <button className='buttonPublish '><a href="#">Ingliz tili</a></button>
                    <button className='buttonPublish'><a href="#">Rus tili</a></button>
                    <button className='buttonPublish'><a href="#">Koreys tili</a></button>
                    <button className='buttonPublish'><a href="#">Matematika</a></button>
                    <button className='buttonPublish'><a href="#">Mental arifmetika</a></button>
                </div>
            </div>

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
                        Coursesdata.map((item) => {
                            return (
                                <SwiperSlide>
                                    <div>
                                        <img src={item.img} alt="book" />
                                        <p className='text-left moon'>{item.title}</p>
                                        <p className='text-left author'>{item.author}</p>
                                        <p className='text-left author'>{item.second}</p>
                                        <p className='text-left author'>{item.third}</p>
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
                                                <p className='text-[25px] font-semibold text-[#red]'><i className="fa-solid fa-heart text-[#F02400]"></i></p>
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

export default Courses
