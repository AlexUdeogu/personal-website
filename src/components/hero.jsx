import React from 'react'
import Hand from '../assets/grad.jpeg';

const hero = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <div className="flex flex-col my-20 mx-60 lg:flex-row lg:items-center lg:justify-between p-4">
        <div className="flex justify-center lg:justify-start mb-0 lg:mb-0 lg:w-1/2">
          <img src={Hand} alt="Hand" className="w-80 max-w-md lg:max-w-xl h-auto rounded-3xl filter grayscale" />
        </div>
        <div className="flex-1 flex flex-col items-center  lg:items-start lg:justify-start lg:w-1/2">

          <h1 className="text-4xl font-montserrat text-black text-center lg:text-left mb-2 lg:-ml-3"> 
            Alex
          </h1>
          
          <h1 className="text-4xl font-montserrat text-black text-center lg:text-left mb-2 lg:-ml-3"> 
            Udeogu
          </h1>

          <h1 className='font-serif text-8xl italic text-red-900 lg:-ml-3 mb-2'>
            Software Engineer
          </h1>
        </div>
      </div>
    </div>
  )
}

export default hero
