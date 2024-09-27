"use client"
import ContainerBox from "@/components/shared/ContainerBox"
import RegularButton from "../buttons/RegularButton"
import Image from "next/image"
import hero from "../../../../public/assets/images/placeholder/hero.svg"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const AboutUs = () => 
{
  return (
    <section className="mb-16 md:mb-20 lg:mb-24 xl:mb-24">
      <ContainerBox>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center md:justify-between lg:justify-between xl:justify-between gap-10 md:gap-16 lg:gap-24 xl:gap-32">
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

            <span className="text-sm lg:text-lg xl:text-lg text-secondary pb-2">We help businesses thrive in the digital landscape. From SEO to social media, paid ads to content creation, we have the tools and expertise to grow your brand. Let us turn your goals into reality with innovative solutions that deliver measurable results.</span>

            <div className='flex md:justify-start lg:justify-start xl:justify-start justify-center items-center pb-8 md:pb-10 lg:pb-12 xl:pb-14'>
                <div className='flex justify-between items-center gap-2'>
                  <Link href={'/#'} className='text-primary'>
                    <FaFacebook  
                      size={24}
                      onClick={() =>
                      {
                        setIsSidebarOpen(false);
                        toggleSidebar();
                      }} />
                  </Link>
                  <Link href={'/#'} className='text-primary'>
                    <FaTwitter  
                      size={24}
                      onClick={() =>
                      {
                        setIsSidebarOpen(false);
                        toggleSidebar();
                      }} />
                  </Link>
                  <Link href={'/#'} className='text-primary'>
                    <FaInstagram  
                      size={24}
                      onClick={() =>
                      {
                        setIsSidebarOpen(false);
                        toggleSidebar();
                      }} />
                  </Link>
                  <Link href={'/#'} className='text-primary'>
                    <FaLinkedin  
                      size={24}
                      onClick={() =>
                      {
                        setIsSidebarOpen(false);
                        toggleSidebar();
                      }} />
                  </Link>
                </div>
              </div>

            
            <span className="flex md:justify-start lg:justify-start xl:justify-start justify-center">
                <RegularButton href={'/about-us'}>
                  Learn More
                </RegularButton>
            </span>
          </div>


        </div>
      </ContainerBox>
    </section>
  )
}

export default AboutUs