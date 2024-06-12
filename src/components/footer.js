import React from 'react'
import logo from "../assets/logo2_footer.png.webp"

function Footer() {
    return (
        <div className='flex  xl:flex-row  flex-col gap-[25px] justify-between xl:px-[110px] px-[10px] pt-[110px] pb-[150px] bg-[#FEF4F4]'>
            <div className='flex gap-[15px] flex-col'>
                <img src={logo} alt="logo" className='w-[180px] h-[60px]' />
                <p className='text-left text-[#454E6D]-400 text-[16px] mb-[21px] leading-[1.8]'>Get the breathing space now, and we’ll <br /> extend your term at the other end year for <br /> go.</p>
                <div className='flex gap-[10px]'>
                    <i className="fa-brands fa-facebook iconFooter"></i>
                    <i className="fa-brands fa-instagram iconFooter"></i>
                    <i className="fa-brands fa-linkedin iconFooter"></i>
                    <i className="fa-brands fa-twitter iconFooter"></i>
                </div>
            </div>
            <div className='flex flex-col gap-3 text-left'>
                <h1 className='footertitle'>Book Category</h1>
                <div className='flex flex-row xl:gap-[250px] gap-[15px] justify-between'>
                    <div className='flex flex-col gap-2'>
                        <p className='footerU'>History</p>
                        <p className='footerU'>Horror - Thriller</p>
                        <p className='footerU'>love Stories</p>
                        <p className='footerU'>Science finction</p>
                        <p className='footerU'>Business</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='footerU'>Biography</p>
                        <p className='footerU'>Astrology</p>
                        <p className='footerU'>Digital marketing</p>
                        <p className='footerU'>Software engeering</p>
                        <p className='footerU'>Ecommerce</p>
                    </div>
                </div>

            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='footertitle text-left'>Site Map</h1>
                <div className='flex flex-col gap-2 text-left'>
                    <a href='/' className='footerU'>Home</a>
                    <a href='/' className='footerU'>About us</a>
                    <a href='/' className='footerU'>FAQs</a>
                    <a href='/' className='footerU'>Blog</a>
                    <a href='/' className='footerU'>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
