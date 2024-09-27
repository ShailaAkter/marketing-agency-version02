import ContainerBox from "@/components/shared/ContainerBox"
import teamMembers from "@/components/utils/team"
import memberImage from "../../../../public/assets/images/placeholder/hero.svg"
import Image from "next/image"


const OurTeam = () => 
{
  return (
    <section className="mb-16 md:mb-20 lg:mb-24 xl:mb-24">
      <ContainerBox>
        <div className="flex flex-col justify-center items-center">

          {/* text */}
          <div className="text-center md:max-w-[500px] xl:max-w-[600px] ">
            <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-secondary-darker font-bold pb-4 md:pb-6 lg:pb-8 xl:pb-10">Meet Our Team</h1>

            <p className="text-sm lg:text-lg xl:text-lg text-secondary pb-8 md:pb-10 lg:pb-12 xl:pb-14">Our team is composed of passionate, skilled professionals dedicated to delivering top-notch marketing solutions. We ensure that every project meets and exceeds expectations.</p>
          </div>
          
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-10 ">
            {
              teamMembers.map((member, index) => (
              <div key={index} className="mb-10">
                <div className="bg-white border border-secondary-lighter p-6 rounded-lg shadow-lg text-center h-48">
                  <Image 
                    src={memberImage}
                    width={400}  
                    height={400}
                    alt='about us'
                    className="w-32 h-32 mx-auto mb-4 rounded-full object-cover  transform -translate-y-16"/>
                  <h3 className="xl:text-base md:text-base text-sm text-secondary-darker font-semibold mb-2  transform -translate-y-16">{member.name}</h3>
                  <p className="text-sm text-secondary-light  transform -translate-y-16">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </ContainerBox>

    </section>
  )
}

export default OurTeam