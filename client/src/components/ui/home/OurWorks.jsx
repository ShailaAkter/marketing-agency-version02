"use client"
import ContainerBox from "@/components/shared/ContainerBox"
import work from "../../../../public/assets/images/placeholder/hero.svg"
import Image from "next/image"
import { useState } from "react";
import ActionButton from "../buttons/ActionButton";
import Link from "next/link";
import projects from "@/components/utils/projects";

const OurWorks = () => 
{
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (description) => 
  {
    setModalContent(description);
    setIsModalOpen(true);
  };

  const closeModal = () => 
  {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const latestProjects = projects.slice(0, 4);

  return (
    <section className="mb-16 md:mb-20 lg:mb-24 xl:mb-24 bg-orange-50 py-5 md:p-6 lg:py-6 xl:py-10">
      <ContainerBox>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center md:max-w-[500px] xl:max-w-[700px]">
            <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-secondary-darker font-bold pb-4 md:pb-6 lg:pb-8 xl:pb-10">Our Latest Works</h1>
            <p className="text-sm lg:text-lg xl:text-lg text-secondary pb-8 md:pb-10 lg:pb-12 xl:pb-14">
              From cutting-edge startups to established corporations, our portfolio reflects our ability to deliver impactful solutions that drive results. Explore our work to see how we turn ideas into successful realities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-center gap-10 p-4">
          {
            latestProjects.map((card, index) => (
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
                <p className="text-secondary mb-4 text-sm lg:h-[100px]">{card.description}</p>
                <ActionButton onclick={() => openModal(card)}>
                  View Details
                </ActionButton>
              </div>
            </div>
          ))}

          {/* Modal */}
          {isModalOpen && (
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

        <div className="flex justify-center items-center">
          <Link 
            href={'/our-works#projects'}
            className="px-6 py-3 border border-primary rounded-lg text-sm text-primary font-semibold">
            View More...
          </Link>
        </div>
      </ContainerBox>
    </section>
  );
}

export default OurWorks;
