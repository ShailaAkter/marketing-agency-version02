"use client"
import ContainerBox from "@/components/shared/ContainerBox"
import work from "../../../../public/assets/images/placeholder/hero.svg"
import Image from "next/image"
import { useState } from "react";
import ActionButton from "../buttons/ActionButton";
import Link from "next/link";
import projects from "@/components/utils/projects";
import categories from "@/components/utils/projectCategory";

const OurWorks = () => 
{
  const [activeCategory, setActiveCategory] = useState('Startup');
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content) => 
  {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => 
  {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const filteredProjects = projects.filter(project => project.category === activeCategory);


  return (
    <section id="projects"  className="mb-16 md:mb-20 lg:mb-24 xl:mb-28 ">
      <ContainerBox>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center  xl:max-w-[600px] md:max-w-[500px]">
            <h1 className="xl:text-4xl md:text-3xl text-2xl text-secondary-darker font-bold xl:pb-10 pb-5">Our Works</h1>

            <p className="xl:text-lg md:text-base text-sm text-secondary xl:pb-16 pb-8">From cutting-edge startups to established corporations, our portfolio reflects our ability to deliver impactful solutions that drive results. Explore our work to see how we turn ideas into successful realities.</p>
          </div>
        </div>

        <div>
          <div className="flex justify-center mb-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`xl:px-4 md:px-3 px-1 py-2 mx-1 font-semibold xl:text-lg md:text-base text-sm rounded ${
                activeCategory === category ? 'text-primary' : 'text-secondary'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
          </div>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-10 p-4">
          {
            filteredProjects.map((card, index) => (
            <div key={index} className="flex flex-col justify-center items-center">
              <div className="w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image 
                    src={work}
                    width={1080}
                    height={1080}
                    alt={card.title}
                    layout="responsive"
                    className="rounded-lg"
                  />
              </div>
              <div className="p-6 flex flex-col justify-center items-center text-center">
                  <h2 className="text-xl font-bold mb-2 text-secondary-dark">{card.title}</h2>
                  <p className="text-secondary mb-4 text-sm md:h-[80px]">{card.description}</p>
                  <ActionButton onclick={() => openModal(card)}>
                    View Details
                  </ActionButton>
                </div>
              </div>
            ))}

            {/* Modal */}
            {
              isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full transition-transform transform scale-95 duration-300 ease-in-out">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">{modalContent.title}</h2>
                  <p className="text-gray-700 mb-4">{modalContent.description}</p>
                  <ul className="list-disc pl-5 mb-4 space-y-2">
                    {(modalContent.features || []).map((feature, index) => (
                      <li key={index} className="text-gray-700 text-sm">{feature}</li>
                    ))}
                  </ul>
                  <ActionButton onclick={closeModal} className="w-full mt-4 bg-primary text-white hover:bg-primary-dark transition duration-300">
                    Close
                  </ActionButton>
                </div>
              </div>
            )}
          </div>
        </div>


      </ContainerBox>
    </section>

  )
}

export default OurWorks