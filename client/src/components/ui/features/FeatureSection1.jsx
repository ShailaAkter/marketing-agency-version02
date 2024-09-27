import ContainerBox from "@/components/shared/ContainerBox"
import Image from "next/image"
import feature1 from "../../../../public/assets/images/placeholder/hero.svg"
import { GrOptimize } from "react-icons/gr";
import { IoLogoDesignernews } from "react-icons/io5";


const FeatureSection1 = () => 
{
  return (
    <section  id="optimization"  className="mb-16 md:mb-20 lg:mb-24 xl:mb-24">
      <ContainerBox>
        <div className="flex flex-col-reverse md:flex-row lg:flex-row xl:flex-row justify-center items-center md:justify-between lg:justify-between xl:justify-between gap-10 md:gap-6 lg:gap-6 xl:gap-32">

          {/* text */}
          <div className="w-full md:w-1/2 lg:W-full xl:w-full flex flex-col text-center  md:text-left lg:text-left xl:text-left justify-center md:justify-start lg:justify-start xl:justify-start">

          {/* feature section */}
            <div className="xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
              <div className="w-full pb-8 md:pb-10 lg:pb-10 xl:pb-12">
                <div className="flex xl:justify-start md:justify-start justify-center items-center pb-5 space-x-3">
                  <div className="bg-primary-lighter text-primary rounded-md w-10 h-10 flex justify-center items-center">
                    <GrOptimize />
                  </div>
                  <h1 className="text-secondary-dark  font-semibold">
                    Optimization
                  </h1>
                </div>
                <p className="text-sm xl:text-base xl:text-secondary md:text-secondary text-secondary group-hover:text-white overflow-hidden w-full">
                  Our optimization strategies focus on maximizing your website performance and efficiency. We employ advanced techniques to enhance load times, improve user experience, and ensure seamless functionality across all devices. 
                  </p>

              </div>

              <div className="w-full">
                <div className="flex xl:justify-start md:justify-start justify-center items-center pb-5 space-x-3">
                  <div className="bg-primary-lighter text-primary rounded-md w-10 h-10 flex justify-center items-center">
                    <IoLogoDesignernews />
                  </div>
                  <h1 className="text-secondary-dark  font-semibold">
                    PPC and Web Design
                  </h1>
                </div>
                <p className="text-sm md:text-sm xl:text-base xl:text-secondary md:text-secondary text-secondary group-hover:text-white overflow-hidden w-full">
                Elevate your online presence with our expert PPC and web design services. Our PPC campaigns are designed to drive targeted traffic and maximize ROI through strategic ad placements and data-driven optimization.
              </p>
              </div>

            </div>
          </div>

          {/* image */}
          <div className="w-full md:w-1/2 lg:W-full xl:w-full flex justify-start items-center">
            <Image 
              src={feature1}
              width={1080}  
              height={1080}
              alt='feature section-1'
              className='w-96 md:w-full lg:w-full xl:w-full rounded-lg'/>
          </div>


        </div>
      </ContainerBox>
    </section>
  )
}

export default FeatureSection1
