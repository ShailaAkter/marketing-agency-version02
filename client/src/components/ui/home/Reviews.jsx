"use client"
import ContainerBox from "@/components/shared/ContainerBox";
import reviews from "@/components/utils/reviews";
import React, { useState } from "react";
import image from "../../../../public/assets/images/placeholder/review.svg"
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"


const Reviews = () => 
{
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => 
  {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => 
  {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="mb-16 md:mb-20 lg:mb-24 xl:mb-24 bg-orange-50 py-5 md:p-6 lg:py-6 xl:py-10">
      <ContainerBox>
        <div className="flex flex-col  md:flex-row xl:flex-row xl:justify-between md:justify-between items-center my-12 p-6 bg-white shadow-lg rounded-lg xl:gap-20 md:gap-10 gap-8 px-10 ">
          {/* image */}
          <div className="w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
              src={image}
              width={1080}
              height={1350}
              alt="review image"
              layout="responsive"
              className=""
            />
          </div>

          {/* reviews */}
          <div className="mx-auto ">
            <div className="flex flex-col xl:justify-start md:justify-start justify-center">
              <div className="xl:max-w-[550px] md:max-w-[350px]">
                <div className="h-[150px]">
                  <span className="text-secondary-light"><FaQuoteLeft size={10} /></span>
                  <p className="xl:text-3xl md:text-lg text-base xl:font-bold font-semibold mb-2 text-secondary-dark ps-5">
                  {reviews[currentIndex].review}
                  </p>
                  <span className="text-secondary-light"><FaQuoteRight size={10} /></span>
                  <p className="text-sm font-semibold text-secondary pb-5">
                    - {reviews[currentIndex].name}
                  </p>
                  <div className="flex items-center">
                    {[...Array(Math.floor(reviews[currentIndex].rating))].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">★</span>
                    ))}
                    {reviews[currentIndex].rating % 1 !== 0 && <span className="text-yellow-500 text-xl">½</span>}
                  </div>
                </div>

                
                {/* Navigation Buttons */}
                <div className="flex justify-end items-end gap-2">
                  <button onClick={prevSlide} className="text-xl p-2 rounded-md bg-primary-lighter hover:bg-primary text-primary hover:text-white">
                    <span><FaChevronLeft size={10}/></span>
                  </button>
                  <button onClick={nextSlide} className="text-xl p-2 rounded-md bg-primary-lighter hover:bg-primary text-primary hover:text-white">
                    <span><FaChevronRight size={10}/></span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </ContainerBox>
    </section>
  );
};

export default Reviews;
