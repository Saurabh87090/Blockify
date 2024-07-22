import React from 'react';

function Star({ star }: { star: number }) {
  return (
    <div className='flex space-x-1 mx-[130px] my-4 w-[140px]'>
      {Array.from({ length: star }, (_, index) => (
        <img
          key={index}
          src="/star.svg" // replace with the path to your star image
          alt="star"
          className="star-image" // optional: add a class for styling
        />
      ))}
    </div>
  );
}

export default Star;