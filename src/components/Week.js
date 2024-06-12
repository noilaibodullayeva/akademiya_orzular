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

import { Indexdata } from "./indexData"

import Add from "../assets/ad.jpg.webp"

function Week() {
    return (
        <div className='flex xl:flex-row flex-col justify-between items-center w-[100%] xl:px-[80px] gap-[70px] py-[40px]'>
            <div className='xl:w-[70%] w-[100%]  '>
                <div className='flex xl:flex-row flex-col justify-between items-center py-[20px]'>
                    <p className=' text-[30px] titleBestt'>Featured This Week</p>
                    <p className='text-[20px] cursor-pointer '>View All</p>
                </div>
                <div className='bg-[#FF1616] p-[10px] '>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper bg-[red]"
                    >
                        {
                            Indexdata.map((item) => {
                                return (
                                    <SwiperSlide >
                                        <div className='bg-[red] flex xl:flex-row flex-col items-center justify-between xl:gap-[100px] text-[#fff]  '>
                                            <img src={item.img} alt="img book" className='py-[15px] xl:w-[300px] w-[200px] xl:h-[350px] ' />
                                            <div className=''>
                                                <h1 className='text-[35px]'>{item.title}</h1>
                                                <p className='text-16px font-sans'>{item.author}</p>
                                                <p className='font-bold text-[25px]'>{item.price}</p>
                                                <div >
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star-half-stroke"></i>
                                                </div>
                                                <p>(<span>120</span> Review)</p>
                                                <button>View details</button>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>

            <div  className='xl:w-[30%] w-[100%]'>
                <img src={Add} alt="" className='w-[100%] xl:h-[500px] pt-[20px] pb-[-20px]' />
            </div>
        </div>
    )
}

export default Week
