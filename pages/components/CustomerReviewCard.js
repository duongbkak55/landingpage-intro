import React from 'react'
import { useState } from 'react';
import data from '../../public/data.js';

const CustomerReviewCard = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='flex relative items-center w-[90vw] max-h-[70vh] min-h-[50vh] mt-[3vw] mb-[3vw] customer-card border-2'>
      <div className='ml-[10%] mr-[40%] relative z-20'>
        <img alter="" src="/resources/images/pattern-quotes.svg" className="absolute w-14 h-10 mb-[3vw] top-[-2rem] left-[3rem] z-[11]" />
        <p className='text-sm'>{data[index].content}</p>
        <div className='flex flex-row'>
          <p className='mt-2 text-xs font-extrabold block'>{data[index].name}</p>
          <p className='ml-2 mt-2 text-xs font-extrabold block opacity-30'>{data[index].position}</p>
        </div>
      </div>
      <img alter="" src="/resources/images/pattern-bg.svg" className="absolute w-[50vh] h-[50vh] mb-[3vw] right-[5%] z-[1]" />

      <div className='absolute w-[40vh] h-[40vh] mb-[3vw] right-[10%] z-[2]'>
        <img alter="" src={data[index].image} className="object-cover relative drop-shadow-xl" />
        <div className='absolute h-8 w-16 bottom-[-1rem] left-5 border bg-white rounded-full z-10 drop-shadow-xl flex justify-between'>
          <img alter="" src="/resources/images/icon-prev.svg" className="p-2.5 object-cover relative drop-shadow-xl hover:cursor-pointer" onClick={() => {
            moveToNext();
          }} />
          <img alter="" src="/resources/images/icon-next.svg" className="p-2.5 object-cover relative drop-shadow-xl hover:cursor-pointer" onClick={() => {
            moveToNext();
          }} />
        </div>
      </div>
    </div>
  )

  function moveToNext() {
    setIndex((index + 1) % 2);
  }
}



export default CustomerReviewCard