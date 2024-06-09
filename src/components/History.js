import React from 'react'

function History() {
  return (
    <div className='flex flex-col justify-between gap-[20px] xl:px-[100px] px-[10px] '>
      <div className='flex xl:flex-row flex-col justify-center gap-[20px] '>
           <div className='back1History xl:w-[50%] w-[100%]'>
              <p>The history <br/> of Phipino</p>
              <button className='viewbutton'>View Details</button>
           </div>
           <div className='back2History xl:w-[50%] w-[100%]'>
              <p>Wilma Mumduya</p>
              <button className='viewbutton'>View Details</button>
           </div>
      </div>
      <div className='historyback3 '> 
        <p>Join Newslatter</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores modi <br/> ducimus nostrum quasi accusamus nihil nisi.</p>
        <div className='gap-[20px]'>
            <input type="text" placeholder='Enter your email' className='width-[200px] py-[15px] pl-[25px] rounded-full pr-[150px] mr-[15px]' />
            <button className='viewbutton'>View Details</button>
        </div>
      </div>
    </div>
  )
}

export default History
