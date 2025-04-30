import React from 'react'
import "../styles/about.css"
import FramerMotion from './FramerMotion'
import ImagesSlide from './ImagesSlide'

const About = () => {
  return (
    
    <div className='w-full h-150 flex justify-center items-center relative'>
      <h1 className='text-7xl font-bold font-GeneralSans text-center z-10'>The Moniepoint Women in <br />Tech Internship is aimed at <br />ensuring that young <br /> women have access to <br />building a career in <br />technology.</h1>
      <ImagesSlide  >
      <img src="https://womenintech.moniepoint.com/static/media/tl1-abt-lens.09c87f5532e75c311f8c9a7bf0799b6f.svg" 
      className='absolute top-26 left-90 w-12' />
      </ImagesSlide>

      <ImagesSlide  >
      <img src="https://womenintech.moniepoint.com/static/media/tl2-abt-dark-laptop.a66762edbfe7078266cc7e24d0dc03a5.svg"
       className='absolute top-54 left-22 w-26'  />
       </ImagesSlide>

       <ImagesSlide >
      <img src="https://womenintech.moniepoint.com/static/media/tl3-abt-cube.78779bda1316a522a3e81bdfc8016356.svg" 
      className='absolute top-82 left-20 w-56' />
      </ImagesSlide>
      <ImagesSlide >
      <img src="https://womenintech.moniepoint.com/static/media/tr1-abt-desktop.9f6f91046adaf5580e93ca2d96bb9ea6.svg" 
      className='absolute top-10 right-30 w-40' />
      </ImagesSlide>
      <ImagesSlide >
      <img src="https://womenintech.moniepoint.com/static/media/tr2-abt-small-cube.a841850c2d8083de839830bff7b72cf8.svg" 
      className='absolute top-74 right-40 w-20' />
      </ImagesSlide>
      <ImagesSlide >
      <img src="https://womenintech.moniepoint.com/static/media/tr3-abt-laptop.dd13db3ec4275255a6b8f2dead95e77e.svg"
       className='absolute top-114 right-80 w-30'/>
       </ImagesSlide>
    </div>
  )
}

export default About