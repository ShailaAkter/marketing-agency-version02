import {motion} from 'framer-motion'
import { useEffect, useRef } from 'react';
import { CgClose } from 'react-icons/cg';
import Cart from './Cart';

const Carbar = ({openCart, handleCart, cartControls}) => 
{
  const cartbarRef = useRef(null);

  useEffect(() => 
  {
    const handleClickOutside = (event) => 
    {
      if (cartbarRef.current && !cartbarRef.current.contains(event.target)) 
      {
        handleCart();
      }
    };

    if (openCart) 
    {
      document.addEventListener('mousedown', handleClickOutside);
    } else 
    {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => 
    {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openCart, handleCart]);

  return (
    <>
      {/* close button for cartbar*/}
      <span 
      onClick={handleCart} className="flex justify-center items-center top-8 fixed right-0 px-[20px] text-slate-900 z-[1000] hover:text-yellow-700 hover:scale-125 transition-all duration-300">
        {
          openCart &&
          <motion.span
            initial={{opacity:0}} 
            animate={{opacity:1, transition:{duration:0.1,delay:0.3}}}
            className="text-primary">
              <CgClose size={28}/>
          </motion.span>
        }
      </span>


      {/* cart box details*/}
      <motion.div 
      className=
      {
        `w-[340px] xl:w-[400px] h-screen fixed right-0 top-0 bottom-0 z-[999] ${openCart ? "" : "-right-[340px] xl:-right-[340px]"}`
      }
      initial={{x: '100%'}}
      animate={cartControls}>
        <div 
        ref={cartbarRef}
        className='sticky top-0 right-0 h-screen bg-secondary-extralight text-secondary shadow-lg'>
          <div className='pt-20'>
            <Cart/>
          </div>
        </div>
      </motion.div>
    </>

  )
}

export default Carbar;