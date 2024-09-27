"use client"
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'
import ContainerBox from './ContainerBox'
import Image from 'next/image'
import Link from 'next/link'
import Cartbar from './Cartbar'
import { useAnimationControls } from 'framer-motion'
import { IoCartOutline } from 'react-icons/io5'
import { useCart } from '@/hooks/cart'



const Header = () => 
{
  const [header, setHeader] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const cartControls = useAnimationControls();
  const [cart] = useCart();


  useEffect(() =>
  {
    const handleScroll = () =>
    {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

    // handle toogle cart menu
  const handleCart = () => 
  {
    setOpenCart(!openCart);

    if(openCart)
    {
      const newX = window.innerWidth;
      cartControls.start({ x: newX, transition: {duration: 0.5,}});
    }
    else
    {
      const newX = 0;
      cartControls.start({ x: newX, transition: {duration: 0.5 }});
    }
  };


  return (
  <header className={`${
    header 
    ? ' bg-white shadow-md' 
    : 'bg-orange-50'} 
    fixed top-0 z-50 transition-all w-full`}>
      <ContainerBox>
        <div className="flex justify-between items-center">
          <Link href={'/'}>
              <Image 
              src={'/logo.svg'}
              width={500}  
              height={300}
              alt='logo'
              className='w-auto h-9 md:h-12 lg:h-12 xl:h-12 '/>
          </Link>

          <div>
            {/* navbar for large screen */}
            <div className='hidden xl:flex items-center'>
              <Navbar 
                openCart={openCart}
                handleCart={handleCart}
                cartControls={cartControls}/>
            </div>


            <Cartbar
            openCart={openCart}
            handleCart={handleCart}
            cartControls={cartControls}/>

            {/* navbar for smaller screen */}
            <div className='flex justify-between items-center gap-3 xl:hidden'>
              <div className='relative'>
                <span className="absolute  flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-orange-600 rounded-full transform translate-x-4 -translate-y-2">
                {cart?.length}
                </span>
                <button onClick={handleCart} 
                className="">
                {
                  <IoCartOutline size={30} className="text-primary hover:text-orange-600" />
                }
                </button>
              </div>     

              <MobileNavbar/>
            </div>

          </div>
        </div>
      </ContainerBox>
  </header>
  )
}

export default Header