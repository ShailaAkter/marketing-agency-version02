"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import dashboardMenu from "../utils/dashboardMenu"
import { IoHome } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";
import { useAuth } from "@/hooks/auth";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';



const AdminSidebar = () => 
{
  const [auth, setAuth] = useAuth();
  const currentPath = usePathname();
  const isActive = (path) => path === currentPath;
  const router = useRouter();


  const handleSignOut = async () =>
  {
    setAuth({
      ...auth, user: null
    });
    localStorage.removeItem('auth');
    toast.success("Logout Successfully!"); 
    router.push('/');
  }

  return (
    <div>
      <Link 
        href={"/"}
        className="flex justify-center md:justify-start mb-10 p-2 xl:px-10 m-2">
        <Image
          src={'/logo.svg'}
          alt="logo"
          width={500}
          height={300}
          className="w-auto h-8 md:h-10 lg:h-10 xl:h-12 "/>
      </Link>

      <div className="flex flex-col justify-between h-[80vh]">
        <div>
          {
            dashboardMenu.map((item, index) => 
              <div key ={index}>
                <Link 
                href={item.path}
                className="group flex justify-center md:justify-start items-center gap-2 p-2 xl:px-10 hover:text-primary m-2 xl:m-2 rounded text-sm font-medium">
                  <span className={`${isActive(item.path)? 'text-primary ' : 'group-hover:text-primary text-secondary-darker opacity-80'}`}>{item.icon}</span>
                  <span className={`hidden md:block ${isActive(item.path)? 'text-primary' : 'group-hover:text-primary text-secondary-darker opacity-80'}`}>{item.label}</span>
                </Link>
              </div>
            )
          }
        </div>
        <div>
          <Link 
            href={'/'}
            className="group flex justify-center md:justify-start items-center gap-2 p-2 xl:px-10 hover:text-primary m-2 xl:m-2 rounded text-sm font-medium">
              <span className=" group-hover:text-primary text-secondary-darker opacity-80"><IoHome size={20}/></span>
              <span className="hidden md:block group-hover:text-primary text-secondary-darker opacity-80">Home</span>
            </Link>
          <button 
            onClick={handleSignOut}
            className="group flex justify-center md:justify-start items-center gap-2 p-2 xl:px-10 hover:text-primary m-2 xl:m-2 rounded text-sm font-medium">
              <span className=" group-hover:text-primary text-secondary-darker opacity-80"><IoLogOutSharp size={20}/></span>
              <span className="hidden md:block group-hover:text-primary text-secondary-darker opacity-80">Logout</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar