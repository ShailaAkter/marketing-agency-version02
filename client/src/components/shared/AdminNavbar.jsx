"use client";

import { useAuth } from '@/hooks/auth';
import Image from 'next/image'
import React from 'react'
import { RiShieldUserFill } from "react-icons/ri";


const AdminNavbar = () => 
{
  const [auth, setAuth] = useAuth();

  return (
  <div>
    <div className='flex items-center gap-2 justify-end w-full py-2 mb-10'>
      <div className='flex flex-col'>
        <span className="text-sm font-semibold text-primary">{auth?.user?.email}</span>
        <span className="text-xs text-right text-primary">Admin</span>
      </div>
      <span className='text-primary'>
        <RiShieldUserFill size={35}/>
      </span>
      </div>
    </div>
  )
}

export default AdminNavbar