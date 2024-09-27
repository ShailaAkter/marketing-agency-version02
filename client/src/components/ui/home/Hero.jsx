import ContainerBox from "@/components/shared/ContainerBox"
import RegularButton from "../buttons/RegularButton"
import Image from "next/image"
import hero from "../../../../public/assets/images/placeholder/hero.svg"

const Hero = () => 
{
  return (
    <section className="mb-16 md:mb-20 lg:mb-24 xl:mb-28 bg-orange-50">
      <ContainerBox>
        <div className="flex flex-col-reverse md:flex-row lg:flex-row xl:flex-row justify-center items-center md:justify-between lg:justify-between xl:justify-between gap-10 md:gap-16 lg:gap-24 xl:gap-32 pt-20 lg:pt-24 xl:h-[90vh]">
          
          {/* text */}
          <div className="w-full md:w-1/2 lg:W-full xl:w-full flex flex-col text-center  md:text-left lg:text-left xl:text-left justify-center md:justify-start lg:justify-start xl:justify-start">

            <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-secondary-darker font-bold pb-4 md:pb-6 lg:pb-8 xl:pb-10">Snack Team <br /> Management</h1>

            <span className="text-sm lg:text-lg xl:text-lg text-secondary pb-8 md:pb-10 lg:pb-12 xl:pb-14">At Inside Out, Our expert team is here to elevate your online presence, engage your target audience, and boost your conversions. <br />
              <span className="font-semibold">Ready to Accelerate Your Growth?</span>
            </span>
            

            <span className="flex justify-center md:justify-start xl:justify-start mb-5 md:mb-6 lg:mb-6 xl:mb-6">
              <RegularButton href={'/features#plans'}>
                Try for Free
              </RegularButton>
            </span>
          </div>

          {/* image */}
          <div className="w-full md:w-1/2 lg:W-full xl:w-full flex justify-center items-center">
            <Image 
              src={hero}
              width={1080}  
              height={1080}
              alt='hero'
              className='w-96 md:w-full lg:w-full xl:w-full'/>
          </div>

        </div>
      </ContainerBox>
    </section>
  )
}

export default Hero
