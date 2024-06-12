import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "./styles.css"

// import required modules
import { Pagination } from 'swiper/modules';

function HomePageList1() {
    return (
        <div className='flex flex-col gap-[20px] bg-[#FEF4F4] py-[20px] px-0'>
            <div className='flex flex-row justify-center xl:gap-[20px] gap-[10px] text-[#232f55]  hover:text-[#FF1616]' >
                <p className=' text-[16px] text-[#232f55]  hover:text-[#FF1616] xl:font-semibold'>Home</p>
                <p className=' text-[16px] text-[#232f55]  hover:text-[#FF1616] xl:font-semibold'>Categories</p>
                <p className=' text-[16px] text-[#232f55]  hover:text-[#FF1616] xl:font-semibold'>About</p>
                <p className=' text-[16px] text-[#232f55]  hover:text-[#FF1616] xl:font-semibold'>Pages</p>
                <p className=' text-[16px] text-[#232f55]  hover:text-[#FF1616] xl:font-semibold'>Blog</p>
                <p className=' text-[16px] text-[#232f55]  hover:text-[#FF1616] xl:font-semibold'>Contact</p>
            </div>
            <div className='h-[600px] xl:px-[100px]'>
                <Swiper
                    className="swiperrrr mySwiper swiper-h"
                    spaceBetween={50}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    sx={{ backgroundColor: '#FEF4F4' }}
                >
                    <SwiperSlide className='swiperback' >
                        <p className='text-[14px] font-normal text-[#1a1a1a] mb-[20px] bg-[#fff] py-[6px] px-[17px] rounded-[17px]'>Science Finction</p>
                        <p className='xl:text-[60px] text-[30px] xl:w-[600px] mb-[34px] text-[#fff] fontFamily'>The history Of Phippin</p>
                        <button className='py-[20px] px-[45px] bg-[#ff1616] text-[#fff] cursor-pointer text-[16px] rounded-[35px] relative   hover:bg-[#ff1616] hover:text-[#fff]'>Browse Store</button>
                    </SwiperSlide>
                    <SwiperSlide className='swiperback2' >
                        <p className='text-[14px] font-normal text-[#1a1a1a] mb-[20px] bg-[#fff] py-[6px] px-[17px] rounded-[17px]'>Science Finction</p>
                        <p className='xl:text-[60px] text-[30px] xl:w-[600px] mb-[34px] text-[#fff] fontFamily'>The history Of Phippin</p>
                        <button className='py-[20px] px-[45px] bg-[#ff1616] text-[#fff] cursor-pointer text-[16px] rounded-[35px] relative   hover:bg-[#ff1616] hover:text-[#fff]'>Browse Store</button>
                    </SwiperSlide>
                    <SwiperSlide className='swiperback3' >
                        <p className='text-[14px] font-normal text-[#1a1a1a] mb-[20px] bg-[#fff] py-[6px] px-[17px] rounded-[17px]'>Science Finction</p>
                        <p className='xl:text-[60px] text-[30px] xl:w-[600px] mb-[34px] text-[#fff] fontFamily'>The history Of Phippin</p>
                        <button className='py-[20px] px-[45px] bg-[#ff1616] text-[#fff] cursor-pointer text-[16px] rounded-[35px] relative   hover:bg-[#ff1616] hover:text-[#fff]'>Browse Store</button>
                    </SwiperSlide>
                </Swiper >
            </div>
        </div>
    )
}

export default HomePageList1
