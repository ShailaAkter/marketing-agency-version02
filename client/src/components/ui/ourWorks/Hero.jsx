import React from 'react'
import Image from 'next/image';
import ContainerBox from '@/components/shared/ContainerBox';
import whyus from "../../../../public/assets/images/placeholder/hero.svg"
import { FaCheck } from 'react-icons/fa';


const Hero = () => 
{
  return (
    <section className="mb-16 md:mb-20 lg:mb-24 xl:mb-28 bg-orange-50">
      <ContainerBox>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center md:justify-between lg:justify-between xl:justify-between gap-10 md:gap-16 lg:gap-24 xl:gap-32 pt-20 lg:pt-24 xl:h-[90vh]">
          {/* image */}
          <div className="w-full md:w-1/2 lg:W-full xl:w-full flex justify-center items-center">
            <Image 
              src={whyus}
              width={1080}  
              height={1080}
              alt='why us'
              className='w-96 md:w-full lg:w-full xl:w-full'/>
          </div>
          {/* text */}
          <div className="w-full md:w-1/2 lg:W-full xl:w-full flex flex-col text-center  md:text-left lg:text-left xl:text-left justify-center md:justify-start lg:justify-start xl:justify-start">
            <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-secondary-darker font-bold pb-4 md:pb-6 lg:pb-8 xl:pb-10">Why Sneak Team <br />Management</h1>
            <span className="text-sm lg:text-lg xl:text-lg text-secondary pb-2">
              At Sneak Team Management, we help businesses excel by providing customized solutions that empower your marketing efforts. We focus on driving efficiency, scalability, and growth to ensure your business achieves its full potential.
            </span>
            <div className='flex flex-col md:flex-row justify-start xl:items-start md:items-start items-center md:space-x-10 pb-8 md:pb-10 lg:pb-12 xl:pb-14'>
              <ul className='space-y-1'>
                <li className='flex items-center'>
                  <FaCheck className='text-secondary-light xl:text-base tex-sm mr-3' />
                  <span className='xl:text-base text-sm text-secondary-light'>Tailored marketing strategies</span>
                </li>
                <li className='flex items-center'>
                  <FaCheck className='text-secondary-light xl:text-base tex-sm mr-3' />
                  <span className='xl:text-base text-sm text-secondary-light'>Data-driven decision making</span>
                </li>
                <li className='flex items-center'>
                  <FaCheck className='text-secondary-light xl:text-base tex-sm mr-3' />
                  <span className='xl:text-base text-sm text-secondary-light'>Expert team management services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContainerBox>
    </section>
  )
}

export default Hero