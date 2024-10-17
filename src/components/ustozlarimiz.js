import React from 'react';
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

import Add from "../assets/banner2.jpg"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Ustozlarimiz() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='flex xl:flex-row flex-col justify-between items-center w-[100%] xl:px-[80px] gap-[70px] py-[40px]'>
            <div className='xl:w-[70%] w-[100%]  '>
                <div className='flex xl:flex-row flex-col justify-between items-center py-[20px]'>
                    <p className=' text-[30px] titleBestt'>Bizning ustozlarimiz</p>
                    <p className='text-[18px] text-[grey] cursor-pointer '> <a href="/">Bosh sahifaga qaytish</a> </p>
                </div>
                <div className='bg-[#edece8] p-[10px] '>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper bg-[#edece8]"
                    >
                        {
                            Indexdata.map((item) => {
                                return (
                                    <SwiperSlide >
                                        <div className='bg-[#edece8] flex xl:flex-row flex-col items-center justify-between xl:gap-[100px]  xl:h-[400px] h-[600px] '>
                                            <img src={item.img} alt="img book" className='xl:py-[15px] py-[5px] xl:w-[350px] xl:h-[350px] w-[300px] h-[300px] rounded-[50%] ' />
                                            <div className=''>
                                                <h1 className='text-[40px] text-[#000] font-semibold nameism '>{item.name}</h1>
                                                <p className='text-18px  '>{item.position}</p>
                                                <p className='text-[16px] nameism'>{item.experience}</p>
                                                <div className='py-[10px] flex gap-[5px] justify-center'>
                                                    <i className="fa-solid fa-star text-amber-400"></i>
                                                    <i className="fa-solid fa-star text-amber-400"></i>
                                                    <i className="fa-solid fa-star text-amber-400"></i>
                                                    <i className="fa-solid fa-star text-amber-400"></i>
                                                    <i className="fa-solid fa-star-half-stroke text-amber-400"></i>
                                                </div>
                                                <div className='flex justify-center py-[10px]'>
                                        <button onClick={handleOpen} className='border bg-[#FF1616] text-[16px] text-[white] w-[220px] px-[25px] py-[8px] ml-[20px] rounded-[25px] font-semibold'>Ustoz bilan bog'laning</button>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                                    Ustoz bilan bog'lanish uchun:
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 2, display: 'flex', flexDirection: 'row', gap: '20px' }}>
                                                    <i className="fa-solid fa-phone"></i>
                                                    <p>+998 99 411 8432</p>
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                    <i className="fa-brands fa-telegram"></i>
                                                    <a href="https://t.me/OrzularAkademiyasi_admin" className='ml-[20px]'>Telegram orqali bo'glanish uchun yozuv ustiga bosing</a>
                                                </Typography>
                                            </Box>
                                        </Modal>
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

            <div  className='xl:w-[30%] w-[100%] '>
                <img src={Add} alt="" className='swiperustoz ' />
            </div>
        </div>
    )
}

export default Ustozlarimiz
