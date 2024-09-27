import ContainerBox from "@/components/shared/ContainerBox"
import brand1 from "../../../../public/assets/images/home-page/brand-1.svg"
import brand2 from "../../../../public/assets/images/home-page/brand-2.svg"
import brand3 from "../../../../public/assets/images/home-page/brand-3.svg"
import brand4 from "../../../../public/assets/images/home-page/brand-4.svg"
import brand5 from "../../../../public/assets/images/home-page/brand-5.svg"
import brand6 from "../../../../public/assets/images/home-page/brand-6.svg"
import Image from "next/image"
import Marquee from 'react-fast-marquee';


const Brands = () => 
{
  return (
    <section className="mb-16 md:mb-20 lg:mb-24 xl:mb-24">
      <ContainerBox>
        <div className="flex flex-col justify-center items-center">

          {/* text */}
          <div className="text-center md:max-w-[500px] xl:max-w-[600px] ">
            <h1 className="text-2xl md:text-3xl  lg:text-3xl xl:text-4xl text-secondary-darker font-bold pb-4 md:pb-6 lg:pb-8 xl:pb-10">Used by 1000+ organizations <br />across the world</h1>

            <p className="text-sm lg:text-lg xl:text-lg text-secondary pb-8 md:pb-10 lg:pb-12 xl:pb-14">
              We specialize in delivering innovative marketing solutions that connect your brand with the right audience. Our team ensures impactful results through data-driven strategies and creative content tailored to your unique needs.
            </p>

          </div>

          {/* brands */}
        </div>
      </ContainerBox>

      <Marquee speed={80} pauseOnHover={true} >
            <div className="flex justify-center items-center opacity-45 gap-24">
              <Image 
                src={brand1}
                width={500}  
                height={300}
                alt='brand1'
                className='w-16 h-auto xl:w-24 mx-5 my-2 xl:h-auto'/>
              <Image 
                src={brand2}
                width={500}  
                height={300}
                alt='bran2'
                className='w-16 h-auto xl:w-24 mx-5 my-2 xl:h-auto'/>
              <Image 
                src={brand3}
                width={500}  
                height={300}
                alt='brand3'
                className='w-16 h-auto xl:w-24 mx-5 my-2 xl:h-auto'/>
              <Image 
                src={brand4}
                width={500}  
                height={300}
                alt='brand4'
                className='w-16 h-auto xl:w-24 mx-5 my-2 xl:h-auto'/>
              <Image 
                src={brand5}
                width={500}  
                height={300}
                alt='brand5'
                className='w-16 h-auto xl:w-24 mx-5 my-2 xl:h-auto'/>
              <Image 
                src={brand6}
                width={500}  
                height={300}
                alt='brand6'
                className='w-16 h-auto xl:w-24 mx-5 my-2 xl:h-auto'/>
            </div>
      </Marquee>
    </section>
  )
}

export default Brands