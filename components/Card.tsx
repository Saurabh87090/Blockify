import React from 'react';
import Star from "./Star";

function Card(props: any) {
    const { name, imgSrc, content, star } = props;
    return (
        <div className='p-4 w-full sm:w-1/2 md:w-2/2 lg:w-1/4'>
            <div className='flex flex-col items-center'>
                <img className='w-32 h-32' src={imgSrc} alt={name} />
                <h1 className='mt-4 text-[20px] font-semibold w-[160px] text-center'>{name}</h1>
                <p className='mt-2 w-[280px] text-center'>{content}</p>
                <Star star={star} />
            </div>
        </div>
    )
}

export default Card;
