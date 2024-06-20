import React from 'react'
import logo from "../assets/logo-center.jpg"
import "./styles.css"
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

export default function Header() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='flex xl:flex-row flex-col justify-between xl:px-[100px] px-[10px] xl:h-[80px] h-[200px] py-[15px]'>
            <div className='flex xl:flex-row flex-col justify-around xl:gap-[40px] align-baseline'>
                <img src={logo} alt="logo" className='box-border h-[45px] xl:block hidden' />
                <p href="/" className='logo_name'>ORZULAR AKADEMIYASI</p>
            </div>
            <div className='flex flex-row justify-center xl:gap-[20px] gap-[10px] text-[#232f55]  hover:text-[#FF1616] mt-[10px] cursor-pointer'  >
                <p className=' text-[16px] text-[#232f55]  hover:text-[#FF1616] xl:font-semibold'>Home</p>
                <p className=' text-[16px] text-[#232f55]  hover:text-[#FF1616] xl:font-semibold'>Categories</p>
                <p className=' text-[16px] text-[#232f55]  hover:text-[#FF1616] xl:font-semibold'>About</p>
                <p className=' text-[16px] text-[#232f55]  hover:text-[#FF1616] xl:font-semibold'>Pages</p>
                <p className=' text-[16px] text-[#232f55]  hover:text-[#FF1616] xl:font-semibold'>Blog</p>
                <p className=' text-[16px] text-[#232f55]  hover:text-[#FF1616] xl:font-semibold'>Contact</p>
            </div>
            <div className='flex justify-between  '>
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
                        <Typography id="modal-modal-description" sx={{ mt: 2, display:'flex', flexDirection:'row', gap:'20px' }}>
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
    )
}
