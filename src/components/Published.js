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
        <div className='px-[80px] py-[20px] bg-[#FEF4F4]'>
            <div className='flex xl:flex-row flex-col justify-between items-center py-[20px]'>
                <p className='text-[35px] text-[black]-500'>Latest published items</p>
                <div className='text-[20px] cursor-pointer flex gap-4  '>
                   <button className='buttonPublish'><a href="#">All</a></button>  
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
                                        <p className='text-black-700 text-[20px]'>{item.title}</p>
                                        <p className='text-#9EA1AF-300 text-[16px]'>{item.author}</p>
                                        <div className='flex flex-row items-center justify-between px-[10px]'>
                                            <div>
                                                <div>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star-half-stroke"></i>
                                                </div>
                                                <p>(<span>120</span> Review)</p>
                                            </div>
                                            <div>
                                                <p>$50</p>
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
