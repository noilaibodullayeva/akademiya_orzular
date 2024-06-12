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

import { PublishedData } from "./publishedData"

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';

function Published() {

    return (
        <div className='xl:px-[80px] px-[10px] py-[20px] bg-[#FEF4F4]'>
            <div className='flex xl:flex-row flex-col justify-between items-center py-[20px]'>
                <p className='text-[35px] text-[black]-500 titleBestt'>Latest published items</p>
                <div className='text-[20px] cursor-pointer flex xl:gap-4 gap-[5px]  '>
                    <button className='buttonPublish '><a href="#">All</a></button>
                    <button className='buttonPublish'><a href="#">Horror</a></button>
                    <button className='buttonPublish'><a href="#">Thriller</a></button>
                    <button className='buttonPublish'><a href="#">Science Finction</a></button>
                    <button className='buttonPublish'><a href="#">History</a></button>
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
                        PublishedData.map((item) => {
                            return (
                                <SwiperSlide>
                                    <div>
                                        <img src={item.img} alt="book" />
                                        <p className='text-left moon'>{item.title}</p>
                                        <p className='text-left author'>{item.author}</p>
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
            <div>
                <button className='borderbrowse'>Browse all</button>
            </div>
        </div>
    )
}

export default Published
