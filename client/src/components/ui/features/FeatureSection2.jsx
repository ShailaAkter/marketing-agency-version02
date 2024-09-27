import ContainerBox from "@/components/shared/ContainerBox"
import Image from "next/image"
import feature2 from "../../../../public/assets/images/placeholder/hero.svg"
import { BiBookContent } from "react-icons/bi";
import { IoAnalytics } from "react-icons/io5";
import PrivateRoute from "@/components/shared/PrivateRoute";


const FeatureSection2 = () => 
{
  return (
    <section id="content" className="mb-16 md:mb-20 lg:mb-24 xl:mb-24 bg-orange-50 py-5 md:p-6 lg:py-6 xl:py-10">
      <ContainerBox>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center md:justify-between lg:justify-between xl:justify-between gap-10 md:gap-6 lg:gap-6 xl:gap-32">
            
          {/* image */}
          <div className="w-full md:w-1/2 lg:W-full xl:w-full flex justify-center items-center">
            <Image 
            src={feature2}
            width={1080}  
            height={1080}
            alt='feature section-2'
            className='w-96 md:w-full lg:w-full xl:w-full rounded-lg'/>
          </div>

          {/* text */}
          <div className="w-full md:w-1/2 lg:W-full xl:w-full flex flex-col text-center  md:text-left lg:text-left xl:text-left justify-center md:justify-start lg:justify-start xl:justify-start">

          {/* feature section */}
            <div className="xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
              <div className="w-full pb-8 md:pb-10 lg:pb-10 xl:pb-12">
                <div className="flex xl:justify-start md:justify-start justify-center items-center pb-5 space-x-3">
                  <div className="bg-primary-lighter text-primary rounded-md w-10 h-10 flex justify-center items-center">
                    <BiBookContent />
                  </div>
                  <h1 className="text-secondary-dark font-semibold">
                    Content Creation
                  </h1>
                </div>
                <p className="text-sm md:text-sm xl:text-base xl:text-secondary md:text-secondary text-secondary group-hover:text-white overflow-hidden w-full">
                  Our content creation services are designed to captivate and engage your audience with high-quality, compelling content. From blog posts and articles to social media updates.
                </p>

              </div>

              <div className="w-full">
                <div className="flex xl:justify-start md:justify-start justify-center items-center pb-5 space-x-3">
                  <div className="bg-primary-lighter text-primary rounded-md w-10 h-10 flex justify-center items-center">
                    <IoAnalytics />
                  </div>
                  <h1 className="text-secondary-dark  font-semibold">
                    Analytics
                  </h1>
                </div>
                <p className="text-sm xl:text-base xl:text-secondary md:text-secondary text-secondary group-hover:text-white overflow-hidden w-full">
                  We provide detailed insights into your website performance, user behavior, and marketing campaign effectiveness. By leveraging advanced tools and techniques, we help you understand key metrics, identify trends.
                </p>

              </div>

            </div>
          </div>

        </div>
      </ContainerBox>
    </section>
  )
}

export default FeatureSection2
