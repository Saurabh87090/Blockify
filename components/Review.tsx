import React from 'react'
import Star from "./Star";
import Card from "./Card";
import { cardData } from "@/app/data/card";

const Review = () => {
  return (
    
    <div className='bg-slate-200 h-[1755px] lg:h-[950px] md:h-[1351px]'>
      <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-[120px]'>
        <a href="#" title="" className=" lg:inline-flex items-center justify-center px-9 py-2 text-base font-semibold text-[#1F5B3E] transition-all duration-200 bg-[#C5FFE3] border border-transparent rounded-md mt-[120px]" role="button">TESTIMONIALS</a>
        <h1 className='text-[24px] sm:text-[32px] md:text-[38px] lg:text-[40px] mt-5 font-semibold'>Satisfied client from big brands</h1>
        <p className='text-[#737373] text-[16px] sm:text-[18px] md:text-[20px]'>Brace yourself for an extraordinary journey into the future of technology.</p>

        <div className='bg-white mt-8 rounded-2xl '>
          <div className='flex flex-wrap justify-evenly'>
            {cardData.map((card, index) => (
              <Card
                key={index}
                name={card.name}
                star={card.star}
                content={card.content}
                imgSrc={card.imgSrc}
              />
            ))}
          </div>
          
          <div className='flex items-center justify-center my-[40px]'>
            <img src="frame.svg" alt="Frame" />
          </div>
          
          <div className='grid grid-cols-2 gap-8 p-4 sm:grid-cols-3 lg:grid-cols-6 lg:mt-[60px] ml-8'>
            <img className='' src="shopify.svg" alt="Shopify" />
            <img className='lg: mt-5' src="amazon.svg" alt="Amazon" />
            <img className='' src="Alibaba.svg" alt="Alibaba" />
            <img className='mt-6' src="ebay.svg" alt="eBay" />
            <img className='' src="snapdeal.svg" alt="Snapdeal" />
            <img className='' src="walmart.svg" alt="Walmart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review;
