import React from 'react'
import logo from "../assets/logo.png.webp"

export default function Header() {
    return (
        <div className='flex xl:flex-row flex-col justify-between xl:px-[100px] px-[10px] xl:h-[80px] h-[200px] py-[15px]'>
            <div className='flex xl:flex-row flex-col justify-around xl:gap-[40px] align-baseline'>
                <img src={logo} alt="logo" className='box-border h-[45px] xl:block hidden' />
                <div className='border-gray-300 h-[50px] border-solid border-2 px-3 rounded-[30px]'>
                    <input
                        type="text"
                        className='rounded-[30px] h-[40px] xl:w-[460px]  outline-none px-3'
                        placeholder='Search book by author or publisher'
                    />
                    <i className="fa-solid fa-magnifying-glass text-[#ff1616]"></i>
                </div>
            </div>
            <div className='flex justify-between'>
                <p className='cursor-pointer p-2 text-[18px] text-[#454e6d] hover:text-[#FF1616]'>FAQ</p>
                <p className='cursor-pointer p-2 text-[18px] text-[#454e6d] hover:text-[#FF1616]'>Track Order</p>
                <div className=' cursor-pointer p-2 text-[18px] text-[#454e6d] relative'>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div className='h-[20px] w-[20px] absolute top-0 right-0 bg-[#FF1616] rounded-full flex items-center justify-center'>0</div>
                </div>
                <button className='border p-2 bg-[#FF1616] text-[white] w-[120px] px-[15px] py-[8px] ml-[20px] rounded-[25px] font-semibold'>Sign in</button>
            </div>
            <img src={logo} alt="logo" className='box-border h-[45px] w-[200px] xl:hidden block' />
        </div>
    )
}
