"use client"
import ContainerBox from "@/components/shared/ContainerBox";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6"


const ResetPassword = () =>
{
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const params = useSearchParams();
  const router = useRouter();

 

  // const parts = currentUrl.split('/');

  const verificationCode = params.get('verificationCode');

  console.log(verificationCode);

  const checkPasswordVisiblity = () =>
  { 
    setShowPassword(!showPassword);
  }


  //reset password validation form
  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    try
    {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/reset-password`, 
      {
        email, 
        newPassword,
        verificationCode
      });
    
      if(res && res.data.success)
      {
          toast.success(res.data && res.data.message);
          router.push('/');
      }
      else
      {
          toast.error(res.data.message);
      }
    }
    catch(error)
    {
        console.log(`Error in Reset Password handleSubmit = ${error}`);
        toast.error("Something went wrong while submit Reset Password");
    }

  }
  return (
    <section className="bg-gradient-to-b from-primary to-orange-600">
      <ContainerBox>
        <div className="min-h-screen flex justify-center items-center">

          {/*forgot-password form card */}
          <div className="bg-white border border-primary-lighter flex justify-center items-center rounded-xl shadow-lg p-10 md:p-12 lg:p-14 xl:p-16 max-w-3xl xl:max-w-4xl w-full ">
            <div className="sm:w-1/2 w-full">

              <p className="text-sm font-light text-secondary-dark mb-10">Enter email address and new password</p>

              <form className="flex flex-col" onSubmit={handleSubmit}>
                <input 
                  className="px-4 py-3 mb-4 text-sm border border-secondary-light rounded outline-primary text-secondary-dark" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required/>

                <div className="relative">

                <input 
                  className="w-full px-4 py-3 mb-4 text-sm  border border-secondary-light rounded outline-primary text-secondary-dark" 
                  type={showPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password" 
                  required/>

                    <span onClick={checkPasswordVisiblity} className="absolute text-secondary-light top-3 right-3"> 
                      {showPassword? <FaEye/> : <FaEyeSlash/>}
                    </span>
                </div>

                    <button className="bg-primary text-white font-semibold p-3 rounded hover:bg-orange-600" type="submit">Reset</button>
              </form>

            </div>


          </div>

        </div>
      </ContainerBox>
    </section>
  )
}

export default ResetPassword