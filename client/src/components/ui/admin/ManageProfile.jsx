"use client"

import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "@/hooks/auth";
import PrivateRoute from "@/components/shared/PrivateRoute";

const ManageProfile = () => 
{
  const [auth, setAuth] = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const checkPasswordVisibility = () => 
  {
    setShowPassword(!showPassword);
  };

  useEffect(() => 
  {
    if (auth?.user) 
    {
      setUsername(auth?.user?.username || '');
      setEmail(auth?.user?.email || '');
      setPhone(auth?.user?.phone || '');
      setAddress(auth?.user?.address || '');
    }
  }, [auth?.user]);

  // Update form handling function
  const handleUpdate = async (e) =>
  {
    e.preventDefault();

    try 
    {
      const { data } = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/update-profile`, 
      {
        username,
        email,
        password,
        phone,
        address,
      });
      if (data && data?.success) 
      {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem('auth', JSON.stringify(ls));
        toast.success(data?.message);
      } 
      else 
      {
        toast.error(data?.message);
      }
    } 
    catch (error) 
    {
      console.log(`Error in handleUpdate = ${error}`);
      toast.error("Something went wrong while updating your profile.");
    }
  };

  return (
  <div title="Manage Profile | TIMEZEN" className="bg-white flex justify-center items-center min-h-[85vh] py-10">
      <div className="w-full md:max-w-lg xl:w-1/3 mx-auto p-8">
        <h2 className="text-center text-2xl font-bold text-primary mb-6">Manage Your Profile</h2>
        <form className="space-y-6" onSubmit={handleUpdate}>

          <div>
            <input
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-secondary focus:outline-none focus:border-primary"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>

          <div>
            <input
              className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-secondary cursor-not-allowed"
              type="email"
              value={email}
              disabled
              placeholder="Email"
            />
          </div>

          <div className="relative">
            <input
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-secondary focus:outline-none focus:border-primary"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <span
              onClick={checkPasswordVisibility}
              className="absolute top-1/2 transform -translate-y-1/2 right-4 text-secondary cursor-pointer"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <div>
            <input
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-secondary focus:outline-none focus:border-primary"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              required
            />
          </div>

          <div>
            <input
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-secondary focus:outline-none focus:border-primary"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition duration-200"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrivateRoute(ManageProfile);
