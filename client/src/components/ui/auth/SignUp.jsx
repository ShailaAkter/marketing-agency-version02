"use client"

import ContainerBox from "@/components/shared/ContainerBox";
import { useState } from "react";
import signup from "../../../../public/assets/images/placeholder/hero.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from 'next/navigation';


const SignUp = () => 
{
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const router = useRouter();



  const checkPasswordVisiblity = () =>
  {
    setShowPassword(!showPassword);
  }

  //sign-up form validation
  const handleSubmit = async (e) =>
  {
    e.preventDefault();

    try
    {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/sign-up`,
      {
        username,
        email, 
        password, 
        phone, 
        address
      });

      if(res && res.data.success)
      {
        toast.success(res.data.message);
        router.push('/');
      }
      else
      {
        toast.error(res.data.message);
      }
    }
    catch(error)
    {
      console.log(`Error in Sign Up handleSubmit = ${error}`);
      toast.error("Something went wrong while sign up");
    }

  }
  return (
    <section className="bg-gradient-to-b from-primary to-orange-600">
      <ContainerBox>
        <div className="min-h-screen flex justify-center items-center">

          {/* register card */}
          <div className="bg-white border border-primary-lighter flex justify-center items-center rounded-xl shadow-lg p-8 md:p-8 lg:p-14 xl:p-16 max-w-3xl xl:max-w-4xl w-full ">
            <div className="w-1/2 relative sm:block hidden">
              <Image 
                src={signup}
                width={1080}  
                height={1080}
                alt='about us'
                className='w-96 md:w-full lg:w-full xl:w-full rounded-lg'/>
            </div>

            <div className="sm:w-1/2 w-full">

              <h2 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-secondary-dark">Create new account</h2>
              <p className="text-sm font-light text-secondary-dark mb-10">It is quick and easy!</p>

              <form className="flex flex-col" onSubmit={handleSubmit}>

                <input 
                  className="px-4 py-3 mb-4 text-sm border border-secondary-light rounded outline-primary text-secondary-dark" 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  required/>

                <input 
                  className="px-4 py-3 mb-4 text-sm border border-secondary-light rounded outline-primary text-secondary-dark" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  required/>

                <div className="relative">

                  <input 
                    className="w-full px-4 py-3 mb-4 text-sm  border border-secondary-light rounded outline-primary text-secondary-dark" 
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password" 
                    required/>

                      <span onClick={checkPasswordVisiblity} className="absolute text-secondary-light top-3 right-3"> 
                        {showPassword? <FaEye/> : <FaEyeSlash/>}
                      </span>
                  </div>

                  <input 
                  className="px-4 py-3 mb-4 text-sm border border-secondary-light rounded outline-primary text-secondary-dark" 
                  type="text" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Phone Number"
                  required/>

                  <input 
                  className="px-4 py-3 mb-4 text-sm border border-secondary-light rounded outline-primary text-secondary-dark bg-primary-" 
                  type="text" 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Address"
                  required/>


                    <button className="bg-primary text-white font-semibold p-3 rounded hover:bg-orange-600" type="submit">Submit</button>
                  </form>

                  <div className="pt-5">
                      <hr className="border-slate-300 my-1" />

                      <div className="opacity-60">
                          <span className="text-sm font-semibold text-slate-800 ">Already have an account? </span> 
                          <Link className="text-sm font-semibold text-primary" href={'/sign-in'}>Sign In</Link>
                          <span className="text-sm font-semibold text-slate-800 p-2">now</span> 
                      </div>
                  </div>

              </div>


          </div>

        </div>
      </ContainerBox>
    </section>
  )
}

export default SignUp