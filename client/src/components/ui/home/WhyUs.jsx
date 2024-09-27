import React from 'react'
import RegularButton from '../buttons/RegularButton';
import Image from 'next/image';
import ContainerBox from '@/components/shared/ContainerBox';
import whyus from "../../../../public/assets/images/placeholder/hero.svg"
import { FaCheck } from 'react-icons/fa';

const WhyUs = () => 
{
  return (
    <section className="mb-16 md:mb-20 lg:mb-24 xl:mb-28">
      <ContainerBox>

        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center md:justify-between lg:justify-between xl:justify-between gap-10 md:gap-16 lg:gap-24 xl:gap-32">
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
          <div className="w-full md:w-1/2 lg:W-full xl:w-full flex flex-col text-center md:text-left lg:text-left xl:text-left justify-center md:justify-start lg:justify-start xl:justify-start">
            <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-secondary-darker font-bold pb-4 md:pb-6 lg:pb-8 xl:pb-10">
              Why Choose Our Marketing Team
            </h1>
            
            <span className="text-sm lg:text-lg xl:text-lg text-secondary pb-4">
              Elevate your brand with tailored strategies that deliver measurable results. We craft marketing campaigns that align with your business goals, driving growth.
            </span>

            <div className="flex flex-col md:flex-row justify-start xl:items-start md:items-start items-center md:space-x-10 pb-8 md:pb-10 lg:pb-12 xl:pb-14">
              <ul className="space-y-1">
                <li className="flex items-center">
                  <FaCheck className="text-secondary-light xl:text-base tex-sm mr-3" />
                  <span className="xl:text-base text-sm text-secondary-light">
                    Data-driven strategies tailored for your business.
                  </span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-secondary-light xl:text-base tex-sm mr-3" />
                  <span className="xl:text-base text-sm text-secondary-light">
                    Expert insights to increase brand visibility.
                  </span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-secondary-light xl:text-base tex-sm mr-3" />
                  <span className="xl:text-base text-sm text-secondary-light">
                    Creative content and targeted campaigns.
                  </span>
                </li>
              </ul>
            </div>

            <span className="flex xl:justify-start md:justify-start justify-center">
              <RegularButton href={'/our-works'}>
                Learn More
              </RegularButton>
            </span>
          </div>



        </div>
      </ContainerBox>
    </section>
  )
}

export default WhyUs