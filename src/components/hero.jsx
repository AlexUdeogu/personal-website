import React from 'react'
import Hand from '../assets/grad.jpeg';

const hero = () => {
  return (
    <div className='font-manrope'>
            {/* Hero Image Section */}
      <div className="flex flex-col m-20 lg:flex-row lg:items-center lg:justify-between p-4">
        <div className="flex justify-center lg:justify-start mb-0 lg:mb-0 lg:w-1/2">
          <img src={Hand} alt="Hand" className="w-80 max-w-md lg:max-w-xl h-auto rounded-full filter grayscale" />
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-start lg:justify-start lg:w-1/2">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-black text-center lg:text-left mb-2 lg:-ml-4">
            Put People First
          </h1>
          <p className="text-lg text-black  mb-2 lg:-ml-3">
            From seamless money management to achieving <br className="hidden sm:block" /> financial goals and making smart investments.
          </p>
        </div>
      </div>
    </div>
  )
}

export default hero
