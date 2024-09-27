"use client"

import { useState } from "react";
import ActionButton from "../ui/buttons/ActionButton"
import ContainerBox from "./ContainerBox"

const OfferForm = () => 
{
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');


  const handleSubscribe = () => 
  {
    setShowModal(true);
    setTimeout(() => 
    {
      setShowModal(false);
    }, 2000); 

  };
  return (
    <section className="mb-16 md:mb-20 lg:mb-24 xl:mb-24">
      <ContainerBox>
        <div className="flex flex-col justify-center items-center">

          {/* text */}
          <div className="text-center  xl:max-w-[600px] md:max-w-[500px]">
            <h1 className="text-2xl md:text-3xl  lg:text-3xlxl:text-4xl text-secondary-darker font-bold pb-4 md:pb-6 lg:pb-8 xl:pb-10"> Let us send you offering</h1>

          </div>

          {/* offer form */}
          <div className="flex justify-center items-center w-full">
            <div className="flex xl:flex-row md:flex-row flex-col xl:gap-8 md:gap-6 gap-4 xl:w-4/5 md:w-4/5 2/3">
              <input 
                type="email" 
                className="flex-grow border xl:text-lg md:text-base text-sm rounded-lg duration-100 transition-all text-left hover:outline-none outline-none xl:px-8 xl:py-4 px-6 py-3"
                placeholder="Enter Your Email Address"
                onChange={(e) => setEmail(e.target.value)}
                required />

                <button 
                  className="block bg-primary hover:bg-orange-600 hover:opacity-85 text-white group-hover:text-white  xl:text-lg md:text-base text-sm font-semibold px-4 py-3 rounded-lg duration-100 transition-all text-center" 
                  onClick={handleSubscribe}>
                    Subscribe Now
                </button>
            </div>
          </div>
        </div>
      </ContainerBox>

        {showModal && email && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full text-center relative transform scale-95 transition-transform duration-300 ease-out">
              {/* Congratulations Text */}
              <h2 className="text-4xl font-bold text-green-500 mb-2">Congratulations!</h2>
              
              {/* Subscription Successful Text */}
              <h3 className="text-xl font-semibold text-primary mb-4">Subscription Successful!</h3>
              
              {/* Description */}
              <p className="text-lg text-secondary mb-6">
                Thank you for subscribing! We will send you the best offers shortly.
              </p>
              
              {/* Accent Bar */}
              <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4"></div>
            </div>
          </div>

      )} 
    </section>
  )
}

export default OfferForm