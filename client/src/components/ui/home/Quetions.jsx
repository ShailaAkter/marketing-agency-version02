import ContainerBox from '@/components/shared/ContainerBox'
import React from 'react'
import { FaChevronDown } from 'react-icons/fa6'

const Quetions = () => 
{
  return (
    <section className="mb-16 md:mb-20 lg:mb-24 xl:mb-24">
      <ContainerBox>
        <div className="flex flex-col justify-center items-center">

          {/* text */}
          <div className="text-center md:max-w-[500px] xl:max-w-[600px] ">
            <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-secondary-darker font-bold pb-4 md:pb-6 lg:pb-8 xl:pb-10">Frequently Asked Questions</h1>

            <p className="text-sm lg:text-lg xl:text-lg text-secondary pb-8 md:pb-10 lg:pb-12 xl:pb-14">Here are answers to some common questions about how our marketing services can help grow your business and enhance your brand.</p>
          </div>

          {/* frequently asked questions */}
          <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8 justify-center items-center'>
            <div className='space-y-4'>

              <details className="border border-secondary-lighter p-4 rounded-md">
                <summary className="font-semibold text-secondary-dark cursor-pointer faq-summary flex justify-between items-center xl:text-base md:text-sm text-xs">
                  <span>What types of marketing strategies do you offer?</span>
                  <FaChevronDown className="text-secondary-dark" />
                </summary>
                <p className="text-secondary-dark opacity-90 mt-2 ps-4 text-sm">We provide a wide range of strategies including social media marketing, SEO optimization, content creation, and more.</p>
              </details>

              <details className="border border-secondary-lighter p-4 rounded-md">
                <summary className="font-semibold text-secondary-dark cursor-pointer faq-summary flex justify-between items-center xl:text-base md:text-sm text-xs">
                  <span>How can digital marketing improve my business visibility?</span>
                  <FaChevronDown className="text-slate-700" />
                </summary>
                <p className="text-secondary-dark opacity-90 mt-2 ps-4 text-sm">Digital marketing allows you to reach a wider audience, target specific demographics, and engage with customers in real-time.</p>
              </details>

              <details className="border border-secondary-lighter p-4 rounded-md">
                <summary className="font-semibold text-secondary-dark cursor-pointer faq-summary flex justify-between items-center xl:text-base md:text-sm text-xs">
                  <span>Do you offer personalized marketing plans?</span>
                  <FaChevronDown className="text-slate-700" />
                </summary>
                <p className="text-secondary-dark opacity-90 mt-2 ps-4 text-sm">Yes, we tailor our marketing solutions to fit the unique needs of your business, ensuring maximum impact and ROI.</p>
              </details>

              <details className="border border-secondary-lighter p-4 rounded-md">
                <summary className="font-semibold text-secondary-dark cursor-pointer faq-summary flex justify-between items-center xl:text-base md:text-sm text-xs">
                  <span>How do you measure the success of a marketing campaign?</span>
                  <FaChevronDown className="text-slate-700" />
                </summary>
                <p className="text-secondary-dark opacity-90 mt-2 ps-4 text-sm">We use key performance indicators (KPIs) like website traffic, conversion rates, and engagement to measure success.</p>
              </details>

            </div>

            <div className='space-y-4'>

              <details className="border border-secondary-lighter p-4 rounded-md">
                <summary className="font-semibold text-secondary-dark cursor-pointer faq-summary flex justify-between items-center xl:text-base md:text-sm text-xs">
                  <span>How soon can I expect to see results from digital marketing?</span>
                  <FaChevronDown className="text-slate-700" />
                </summary>
                <p className="text-secondary-dark opacity-90 mt-2 ps-4 text-sm">Results vary depending on the campaign, but many clients start seeing improvements within 3 to 6 months.</p>
              </details>

              <details className="border border-secondary-lighter p-4 rounded-md">
                <summary className="font-semibold text-secondary-dark cursor-pointer faq-summary flex justify-between items-center xl:text-base md:text-sm text-xs">
                  <span>What is the cost of your marketing services?</span>
                  <FaChevronDown className="text-slate-700" />
                </summary>
                <p className="text-secondary-dark opacity-90 mt-2 ps-4 text-sm">Our pricing depends on the scope and duration of the project, and we offer flexible packages to fit different budgets.</p>
              </details>

              <details className="border border-secondary-lighter p-4 rounded-md">
                <summary className="font-semibold text-secondary-dark cursor-pointer faq-summary flex justify-between items-center xl:text-base md:text-sm text-xs">
                  <span>Can you manage my social media accounts?</span>
                  <FaChevronDown className="text-slate-700" />
                </summary>
                <p className="text-secondary-dark opacity-90 mt-2 ps-4 text-sm">Absolutely! We can manage your social media accounts to ensure consistent, engaging content that grows your brand presence.</p>
              </details>

              <details className="border border-secondary-lighter p-4 rounded-md">
                <summary className="font-semibold text-secondary-dark cursor-pointer faq-summary flex justify-between items-center xl:text-base md:text-sm text-xs">
                  <span>What industries do you specialize in?</span>
                  <FaChevronDown className="text-slate-700" />
                </summary>
                <p className="text-secondary-dark opacity-90 mt-2 ps-4 text-sm">We have experience in various industries, including retail, technology, healthcare, and professional services.</p>
              </details>

            </div>
          </div>

        </div>
      </ContainerBox>
    </section>
  )
}

export default Quetions