import React from 'react'

const aboutme = () => {
  return (
    <div className='font-manrope my-40 mx-60 '>
        {/* About me Section */}
        <div>
            <h1 className="text-7xl ml-3 font-serif italic font-medium text-left mb-2"> 
                Get to Know Me
            </h1>
        </div>
        <div className="flex  lg:flex-row">
            <div className="w-7/10 p-4"> 
                <p className='my-5 font-medium text-lg'>
                I specialize in crafting high-converting landing pages and websites for SaaS, Web3 & AI startups. I'm passionate about building software that makes a difference.
                </p>
                <p className='my-5 font-medium text-lg'>
                Beyond my work as a frontend developer, I'm an active leader in tech communities on campus. As a member of the Google Developer Student Clubs and Microsoft Learn Student Ambassadors, I've led workshops and mentored other students.
                </p>
                <p className='my-5 font-medium text-lg'>
                When I'm not coding, you can find me binge-watching anime, hanging out with friends, cheering on Manchester United, or discovering new music in my favorite genres like RnB, UK Drill, and Chill Rap.
                </p>
                <p className='my-5 font-medium text-lg'>
                I'm currently working on some exciting projects that I can't wait to share with you. But I’m always open to new opportunities and collaborations.
                </p>
            </div>
            <div className="w-3/10  p-4"> 
                <h1 className='my-5 font-medium text-red-900 text-xl'>
                    Frontend Tools
                </h1>
                <p className='my-5 text-red-700  text-lg'>
                JavaScript (ES6+), React, Next.js, TypeScript, Prismic CMS, Redux, Redux Toolkit, React Testing Library, Vitetest, HTML5, Git/GitHub, NextAuth, Formik.
                </p>
                <h1 className='my-5 font-medium text-red-900 text-xl'>
                    Frontend Tools
                </h1>
                <p className='my-5 text-red-700 text-lg'>
                JavaScript (ES6+), React, Next.js, TypeScript, Prismic CMS, Redux, Redux Toolkit, React Testing Library, Vitetest, HTML5, Git/GitHub, NextAuth, Formik.
                </p>
                <h1 className='my-5 font-medium text-red-900 text-xl'>
                    Frontend Tools
                </h1>
                <p className='my-5 text-red-700 text-lg'>
                JavaScript (ES6+), React, Next.js, TypeScript, Prismic CMS, Redux, Redux Toolkit, React Testing Library, Vitetest, HTML5, Git/GitHub, NextAuth, Formik.
                </p>
            </div>
        </div>
    </div>
  )
}

export default aboutme