"use client"

import ContainerBox from "@/components/shared/ContainerBox";
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import toast from "react-hot-toast";

const ForgotPassword = () => 
{
  const [email, setEmail] = useState('');
  const router = useRouter();

  


   //forgot-password form validation
  const handleSubmit = async (e) =>
  {
      e.preventDefault();
      try
      {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/forgot-password`, 
          {
              email, 
          });
  
          if(res && res.data.success)
          {
              console.log(res.data);
              toast.success(res.data && res.data.message);
              router.push('/sign-in');
          }
          else
          {
              toast.error(res.data.message);
          }
      }
      catch(error)
      {
          console.log(`Error in Email handleSubmit = ${error}`);
          toast.error("Something went wrong while submit Email Adress");
      }

  }
  return (
    <section className="bg-gradient-to-b from-primary to-orange-600">
      <ContainerBox>
        <div className="min-h-screen flex justify-center items-center">

          {/*forgot-password form card */}
          <div className="bg-white border border-primary-lighter flex justify-center items-center rounded-xl shadow-lg p-10 md:p-12 lg:p-14 xl:p-16 max-w-3xl xl:max-w-4xl w-full ">
            <div className="sm:w-1/2 w-full">

            <p className="text-sm text-secondary-light mb-10">Enter your registered email and verification link will be sent soon</p>

              <form className="flex flex-col" onSubmit={handleSubmit}>
                <input 
                  className="px-4 py-3 mb-4 text-sm border border-secondary-light rounded outline-primary text-secondary-dark" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="abc@gmail.com"
                  required/>

                    <button className="bg-primary text-white font-semibold p-3 rounded hover:bg-orange-600" type="submit">Send Verification Link</button>
              </form>

            </div>


          </div>

        </div>
      </ContainerBox>
    </section>
  )
}

export default ForgotPassword