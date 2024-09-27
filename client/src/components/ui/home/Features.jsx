import ContainerBox from "@/components/shared/ContainerBox"
import { BiBookContent } from "react-icons/bi";
import { GrOptimize } from "react-icons/gr";
import { IoAnalytics, IoLogoDesignernews } from "react-icons/io5";


export const Features = () => 
{
  return (
    <section className="mb-16 md:mb-20 lg:mb-24 xl:mb-24">
      <ContainerBox>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center md:justify-between lg:justify-between xl:justify-between gap-10 md:gap-16 lg:gap-24 xl:gap-32">
          {/* text */}
          <div className="w-full md:w-1/2 lg:W-full xl:w-full flex flex-col text-center  md:text-left lg:text-left xl:text-left justify-center md:justify-start lg:justify-start xl:justify-start">

            <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-secondary-darker font-bold pb-4 md:pb-6 lg:pb-8 xl:pb-10">What&apos;s Our<br />Features</h1>

            <span className="text-sm lg:text-lg xl:text-lg text-secondary pb-2">We provide data-driven marketing strategies tailored to your business needs. Our SEO services boost search engine visibility, while our targeted social media campaigns engage your audience effectively. With high-performance PPC ads, we drive traffic and deliver measurable results, helping your brand grow online.</span>

          </div>

          {/* feature section */}
          <div className="w-full md:w-1/2 lg:W-full xl:w-full flex justify-center items-center">
            <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 md:gap-4 lg:gap-5 xl:gap-10">
              <div className="space-y-3">

                <div className="group flex flex-col justify-start xl:py-12 xl:px-6 py-6 px-2 items-start bg-primary xl:bg-white hover:bg-primary border rounded-lg shadow-lg hover:shadow-primary-lighter transform xl:-translate-y-8 md:-translate-y-8 xl:w-64 xl:h-72 md:w-40 md:h-56 md:-translate-x-14 xl:-translate-x-8">

                  <div className="bg-primary-lighter xl:text-primary rounded-md w-10 h-10 flex justify-center items-center">
                    <GrOptimize/>
                  </div>

                  <h1 className="xl:text-secondary-dark md:text-white text-white group-hover:text-white font-semibold xl:pt-6 pt-4 pb-2">
                    Optimization
                  </h1>

                  <p className="text-xs xl:text-secondary text-white group-hover:text-white overflow-hidden w-full">We develop personalized marketing plans that enhance your search engine rankings.
                  </p>
                </div>

                <div className="group flex flex-col justify-start xl:py-12 xl:px-6 py-6 px-2 items-start bg-white hover:bg-primary border rounded-lg shadow-lg hover:shadow-primary-lighter transform xl:-translate-y-8 md:-translate-y-8 xl:w-64 xl:h-72 md:w-40 md:h-56 md:-translate-x-14 xl:-translate-x-8"> 

                  <div className="bg-primary-lighter xl:text-primary rounded-md w-10 h-10 flex justify-center items-center">
                    <BiBookContent />
                  </div>

                  <h1 className="xl:text-secondary-dark group-hover:text-white font-semibold xl:pt-6 pt-4 pb-2">
                    Content Creation
                  </h1>

                  <p className="text-xs xl:text-secondary md:text-secondary text-secondary group-hover:text-white overflow-hidden w-full"> Connect with your audience through targeted social campaigns and compelling content that resonates.
                  </p>
                </div>
              </div>
              <div className="space-y-3">

                <div className="group flex flex-col justify-start xl:py-12 xl:px-6 py-6 px-2 items-start xl:bg-white md:bg-white bg-primary hover:bg-primary border rounded-lg shadow-lg hover:shadow-primary-lighter transform xl:translate-y-8 xl:w-64 xl:h-72 md:w-40 md:h-56 md:-translate-x-8 xl:-translate-x-8">

                <div className="bg-primary-lighter xl:text-primary rounded-md w-10 h-10 flex justify-center items-center">
                    <IoLogoDesignernews/>
                  </div>

                  <h1 className="xl:text-secondary-dark group-hover:text-white md:text-secondary-dark text-white font-semibold xl:pt-6 pt-4 pb-2 overflow-hidden w-full md:truncate">
                    PPC and Web Design
                  </h1>

                  <p className="text-xs xl:text-secondary-light md:text-secondary text-white group-hover:text-white overflow-hidden w-full"> Drive immediate traffic with effective PPC campaigns and build responsive, user-friendly websites.
                  </p>
                </div>


                <div className="group first:flex flex-col justify-start xl:py-12 xl:px-6 py-6 px-2 items-start xl:bg-white md:bg-primary bg-white hover:bg-primary border rounded-lg shadow-lg hover:shadow-primary-lighter transform xl:translate-y-8 xl:w-64 xl:h-72 md:w-40 md:h-56 md:-translate-x-8 xl:-translate-x-8">

                  <div className="bg-primary-lighter xl:text-primary rounded-md w-10 h-10 flex justify-center items-center">
                    <IoAnalytics/>
                  </div>

                  <h1 className="xl:text-secondary-dark md:text-white text-secondary-darker  group-hover:text-white font-semibold xl:pt-6 pt-4 pb-2">
                    Analytics
                  </h1>

                  <p className="text-xs xl:text-secondary-light md:text-white text-secondary group-hover:text-white">Monitor and measure your success with detailed insights and comprehensive reports and tracks</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </ContainerBox>
    </section>
  )
}
