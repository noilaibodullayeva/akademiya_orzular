import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./styles.css"
// import required modules
import { Pagination } from 'swiper/modules';

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



function HomePageList1() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='flex flex-col gap-[20px] bg-[#FEF4F4] py-[20px] px-0 '>
            <Swiper
                className="swiperrrr mySwiper swiper-h"
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                sx={{ backgroundColor: '#FEF4F4' }}
            >
                
                <SwiperSlide>
                <div className='h-[600px] xl:px-[100px] mx-[100px]'>
                        <div
                            className='bg-[#FEF4F4] w-[100%] h-[600px] flex gap-[50px]'
                        >
                            <div className='h-[600px] p-[20px] flex flex-row justify-center gap-[60px] text-center'>
                                <div className='swiperback ' >

                                </div>
                                <div className='text-center flex flex-col justify-center w-[70%]'>
                                    <p className='homepageorzu text-[50px] font-["Playfair Display"] font-medium '>ORZULAR AKADEMIYASI</p>
                                    <p className='text-[#838996] text-[18px] py-[10px]'>bilan o'z orzularingizga erishing</p>
                                    <div className='flex justify-center py-[10px]'>
                                        <button onClick={handleOpen} className='border bg-[#FF1616] text-[white] w-[220px] px-[25px] py-[8px] ml-[20px] rounded-[25px] font-semibold'>Biz bilan bog'laning</button>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                                    Biz bilan bog'lanish uchun:
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


                        </div >
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[600px] xl:px-[100px] mx-[100px]'>
                        <div
                            className='bg-[#FEF4F4] w-[100%] h-[600px] flex gap-[50px]'
                        >
                            <div className='h-[600px] p-[20px] flex flex-row justify-center gap-[60px] text-center'>
                                <div className='swiperback2 ' >

                                </div>
                                <div className='text-center flex flex-col justify-center w-[70%]'>
                                    <p className='homepageorzu text-[50px] font-["Playfair Display"] font-medium '>ORZULAR AKADEMIYASI</p>
                                    <p className='text-[#838996] text-[18px] py-[10px]'>bilan o'z orzularingizga erishing</p>
                                    <div className='flex justify-center py-[10px]'>
                                        <button onClick={handleOpen} className='border bg-[#FF1616] text-[white] w-[220px] px-[25px] py-[8px] ml-[20px] rounded-[25px] font-semibold'>Biz bilan bog'laning</button>
                                        <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                                    Biz bilan bog'lanish uchun:
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


                        </div >
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default HomePageList1
