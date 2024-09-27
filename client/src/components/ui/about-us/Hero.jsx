import ContainerBox from '@/components/shared/ContainerBox';
import Image from 'next/image';
import React from 'react'
import hero from "../../../../public/assets/images/placeholder/hero.svg"


const Hero = () => {
  return (
    <section className="mb-16 md:mb-20 lg:mb-24 xl:mb-28 bg-orange-50  py-5 md:p-6 lg:py-6 xl:py-10">
      <ContainerBox>
        <div className="flex flex-col-reverse md:flex-row lg:flex-row xl:flex-row justify-center items-center md:justify-between lg:justify-between xl:justify-between gap-10 md:gap-16 lg:gap-24 xl:gap-32 pt-20 lg:pt-24 xl:h-[90vh]">
          {/* image */}
          <div className="w-full md:w-1/2 lg:W-full xl:w-full flex justify-center items-center">
            <Image 
              src={hero}
              width={1080}  
              height={1080}
              alt='about us'
              className='w-96 md:w-full lg:w-full xl:w-full rounded-lg'/>
          </div>
          {/* text */}
          <div className="w-full md:w-1/2 lg:W-full xl:w-full flex flex-col text-center  md:text-left lg:text-left xl:text-left justify-center md:justify-start lg:justify-start xl:justify-start">

            <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-secondary-darker font-bold pb-4 md:pb-6 lg:pb-8 xl:pb-10">About Us</h1>

            <span className="text-sm lg:text-lg xl:text-lg text-secondary pb-6 md:pb-8 lg:pb-10 xl:pb-10 ">We are passionate about helping businesses succeed in the ever-evolving world of digital marketing. We built a team of skilled professionals specializing in key areas like search engine optimization (SEO), social media marketing, pay-per-click advertising (PPC), content marketing, and web design.</span>
          </div>


        </div>
      </ContainerBox>
      <ContainerBox>
        <div className="flex flex-col-reverse md:flex-row lg:flex-row xl:flex-row justify-center items-center md:justify-between lg:justify-between xl:justify-between gap-10 md:gap-16 lg:gap-24 xl:gap-32">
          
          {/* text */}
          <div className="w-full md:w-1/2 lg:W-full xl:w-full flex flex-col text-center  md:text-left lg:text-left xl:text-left justify-center md:justify-start lg:justify-start xl:justify-start">

            <span className="text-sm lg:text-lg xl:text-lg text-secondary pb-6 md:pb-8 lg:pb-10 xl:pb-10 ">Our services are designed to drive traffic, increase engagement, and convert leads into loyal customers. With a focus on innovation and staying ahead of trends, we use the latest tools and techniques to create campaigns that deliver measurable, long-lasting results.</span>
          </div>

          {/* image */}
          <div className="w-full md:w-1/2 lg:W-full xl:w-full flex justify-center items-center">
            <Image 
              src={hero}
              width={1080}  
              height={1080}
              alt='about us'
              className='w-96 md:w-full lg:w-full xl:w-full rounded-lg'/>
          </div>


        </div>
      </ContainerBox>
    </section>
  )
}

export default Hero