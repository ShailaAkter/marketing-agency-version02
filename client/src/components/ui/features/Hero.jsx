import ContainerBox from "@/components/shared/ContainerBox"
import Image from "next/image"
import hero from "../../../../public/assets/images/placeholder/hero.svg"

const Hero = () => 
{
  return (
    <section className="mb-16 md:mb-20 lg:mb-24 xl:mb-28 bg-orange-50">
      <ContainerBox>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center md:justify-between lg:justify-between xl:justify-between gap-10 md:gap-16 lg:gap-24 xl:gap-32 pt-20 lg:pt-24 xl:h-[90vh]">
          {/* image */}
          <div className="w-full md:w-1/2 lg:W-full xl:w-full flex justify-center items-center">
            <Image 
              src={hero}
              width={1080}  
              height={1080}
              alt='hero'
              className='w-96 md:w-full lg:w-full xl:w-full'/>
          </div>
          {/* text */}
          <div className="w-full md:w-1/2 lg:W-full xl:w-full flex flex-col text-center  md:text-left lg:text-left xl:text-left justify-center md:justify-start lg:justify-start xl:justify-start">

            <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-secondary-darker font-bold pb-4 md:pb-6 lg:pb-8 xl:pb-10">Our Features</h1>

            <span className="text-sm lg:text-lg xl:text-lg text-secondary pb-8 md:pb-10 lg:pb-12 xl:pb-14">
            Our marketing strategies are designed to elevate your brand and drive impactful results. From tailored campaigns to data-driven insights, we ensure every decision counts. Whether you are looking to enhance visibility, increase customer engagement, or boost conversions, our team is here to guide you. Partner with us and experience a comprehensive approach to achieving your business goals.
          </span>

          </div>

        </div>
      </ContainerBox>
    </section>
  )
}

export default Hero
