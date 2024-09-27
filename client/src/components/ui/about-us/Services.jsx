
'use client'

import { FaComments, FaBullhorn, FaChartLine, FaRegHandshake } from 'react-icons/fa';

import ContainerBox from "@/components/shared/ContainerBox"

const Services = () => 
{
  return (
  <section id='services' className="mb-16 md:mb-20 lg:mb-24 xl:mb-24 bg-orange-50 py-5 md:p-6 lg:py-6 xl:py-10">
    <ContainerBox>
      <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-primary font-bold text-center pb-8">Our Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
          <FaComments className="text-secondary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Communication</h3>
          <p className="text-secondary">We help create effective communication strategies to engage with your target audience.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
          <FaBullhorn className="text-secondary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Team management</h3>
          <p className="text-secondary">We have expert team management solutions, tailored to streamline your workflow and achieve your business goals.</p>

        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
          <FaChartLine className="text-secondary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Market Analysis</h3>
          <p className="text-secondary">Our market analysis services provide deep insights to stay ahead of the competition.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
          <FaRegHandshake className="text-secondary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Client Relations</h3>
          <p className="text-secondary">We offer exceptional client relations support to maintain long-lasting business relationships.</p>
        </div>
        
      </div>
    </ContainerBox>
  </section>
  )
}

export default Services