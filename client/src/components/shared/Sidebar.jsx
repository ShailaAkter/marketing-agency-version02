import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { CgClose, CgMenuRightAlt} from "react-icons/cg";
import links from '../utils/links';
import RegularButton from '../ui/buttons/RegularButton';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import toast from 'react-hot-toast';
import { useAuth } from '@/hooks/auth';


const Sidebar = ({ isOpen, toggleSidebar }) => 
{
  const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen);

  const sidebarRef = useRef(null);

  const [auth, setAuth] = useAuth();

  const handleSignOut = async () =>
  {
    setAuth({
      ...auth, user: null
    });
    localStorage.removeItem('auth');
    toast.success("Logout Successfully!"); 
  }

  const handleSidebar = () =>
  {
    setIsSidebarOpen(!isSidebarOpen);
    toggleSidebar();
  }

  
  useEffect(() =>
  {
    const handleClickOutside = (event) =>
    {
      if(sidebarRef.current && !sidebarRef.current.contains(event.target))
      {
        setIsSidebarOpen(false);
        toggleSidebar();
      }
    };

    if(isSidebarOpen)
    {
      document.addEventListener('mousedown', handleClickOutside);
    }
    else
    {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () =>
    {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isSidebarOpen, toggleSidebar]);

 

  return (
    <div>

      {/* toogle sidebar menu button */}
      <button onClick={handleSidebar}>
        {
          !isSidebarOpen && 
          <CgMenuRightAlt 
          size={30}
          className='text-primary'/>
        }
      </button>

      
      {/* sidebar */}
      {
        isSidebarOpen && (
          <motion.div
            ref = {sidebarRef}
            initial = {{x: '100%'}}
            animate = {{x:0}}
            exit = {{x: '100%'}}
            transition={{type: 'spring', stiffness: 100}}
            className='fixed top-0 right-0 h-full md:w-72 w-64 bg-secondary-extralight shadow-lg border-l border-primary border-opacity-25 z-50'>

              <div className=''>
                {/* close button */}
                <button 
                  onClick={handleSidebar}
                  className='fixed text-primary right-0 px-8 md:px-20 lg:px-16 py-5 md:py-6 lg:py-6'>
                  <CgClose size={30}/>
                </button>
              </div>

              <div className='flex flex-col justify-center items-center gap-4 h-[40vh]'>
                {
                  links.map((link, index) =>
                  {
                    return(
                      <Link 
                      key={index}
                      href={link.path}
                      className={'text-secondary-darker hover:text-primary text-sm'}>
                        <span onClick={() =>
                          {
                            setIsSidebarOpen(false);
                            toggleSidebar();
                          }}>
                            {link.name}
                        </span>
                      </Link>
                    )
                  })
                }

              </div>


              {
                !auth.user?
                <>
                  <div className='flex flex-col justify-center gap-5 items-center'>
                    <RegularButton
                    href={'/sign-in'}>
                      <span onClick={() =>
                        {
                          setIsSidebarOpen(false);
                          toggleSidebar();
                        }}>
                          Sign In
                      </span>
                    </RegularButton>

                    <Link
                    href={'/sign-up'}
                    className='px-6 py-3 border border-primary rounded-lg md:text-base text-sm text-primary font-semibold'>
                      <span onClick={() =>
                        {
                          setIsSidebarOpen(false);
                          toggleSidebar();
                        }}>
                          Sign Up
                      </span>
                    </Link>
                  </div>
                </>:
                <>
                <div className='flex flex-col justify-center gap-5 items-center'>
                  <Link 
                      href={"/dashboard"}
                      className= "text-sm px-6 py-3 ms-5 border border-primary rounded-lg font-semibold bg-primary text-white hover:bg-white hover:text-primary hover:border">
                        Dashboard
                    </Link>
                    <button onClick={handleSignOut}>
                      <Link 
                        href={"/"}
                        className= "text-sm px-6 py-3 ms-5 border border-primary rounded-lg font-semibold bg-white text-primary hover:bg-primary hover:text-white hover:border">
                          Sign Out
                      </Link>
                    </button>
                </div>
                </>
              }

              <div className='flex justify-center items-center py-10'>
                <div className='flex justify-between items-center gap-2'>
                  <Link href={'/#'} className='text-primary'>
                    <FaFacebook  
                      size={24}
                      onClick={() =>
                      {
                        setIsSidebarOpen(false);
                        toggleSidebar();
                      }} />
                  </Link>
                  <Link href={'/#'} className='text-primary'>
                    <FaTwitter  
                      size={24}
                      onClick={() =>
                      {
                        setIsSidebarOpen(false);
                        toggleSidebar();
                      }} />
                  </Link>
                  <Link href={'/#'} className='text-primary'>
                    <FaInstagram  
                      size={24}
                      onClick={() =>
                      {
                        setIsSidebarOpen(false);
                        toggleSidebar();
                      }} />
                  </Link>
                  <Link href={'/#'} className='text-primary'>
                    <FaLinkedin  
                      size={24}
                      onClick={() =>
                      {
                        setIsSidebarOpen(false);
                        toggleSidebar();
                      }} />
                  </Link>
                </div>
              </div>
          </motion.div>
        )
      }

    </div>
  );
};

export default Sidebar;
