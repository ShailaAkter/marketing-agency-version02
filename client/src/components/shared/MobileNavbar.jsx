import { useAnimationControls } from "framer-motion";
import { useState } from "react"
import Sidebar from "./Sidebar";

const MobileNavbar = () => 
{
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => 
  {
    setIsOpen(!isOpen);
  };
  

  return (
    <div>
      <Sidebar 
        isOpen={isOpen} 
        toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default MobileNavbar