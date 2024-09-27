import Link from "next/link"
import { usePathname } from "next/navigation";
import links from "../utils/links";
import { useAuth } from "@/hooks/auth";
import toast from "react-hot-toast";
import { useState } from "react";
import { IoCartOutline, IoPersonCircleOutline } from "react-icons/io5";
import { useCart } from "@/hooks/cart";
import { useRouter } from 'next/navigation';

const Navbar = ({handleCart, openCart}) => 
{
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const currentPath = usePathname();
  const [cart] = useCart();
  const router = useRouter();


  const isActive = (path) => path === currentPath;

  const handleSignOut = async () =>
  {
    setAuth({
      ...auth, user: null
    });
    localStorage.removeItem('auth');
    toast.success("Logout Successfully!"); 
    router.push('/');
  }
  

  const toggleDropdown = () => 
  {
    setDropdownOpen(!dropdownOpen);
  };

  const getFirstName = (fullName) => 
  {
    const name = fullName?.split(" ")[0] || "User";
    return name.length > 10 ? name.slice(0, 10) + "..." : name;
  };

  return (
    <div className="flex items-center">

      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`text-sm text-secondary-dark p-5 hover:text-primary font-medium 
              ${isActive(link.path) ? "text-primary text-opacity-85" : ""}`}
        >
          {link.name}
        </Link>
      ))}

      
      <div className="relative ms-10">
        <span className="absolute  flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-orange-600 rounded-full transform translate-x-4 -translate-y-2">
            {cart?.length}
          </span>
        <IoCartOutline onClick={handleCart} size={30} className="text-primary hover:text-orange-600" />
      </div>


      {/* If the user is not logged in, show Sign In and Sign Up buttons */}
      {!auth.user ? 
      (
        <>
          <Link
            href={"/sign-in"}
            className="text-sm px-6 py-3 ms-5 border border-primary rounded-lg font-semibold bg-primary text-white hover:bg-white hover:text-primary hover:border">
            Sign In
          </Link>
        </>
      ) : 
      (
        <>
          {/* Show user icon with dropdown */}
          <div className="relative ms-5">
            <button onClick={toggleDropdown} className="flex justify-center items-center group gap-1 text-sm px-5 py-2 rounded-lg font-semibold bg-primary text-white hover:text-primary hover:bg-orange-50 border border-primary">
              <IoPersonCircleOutline size={28} />
              <span>{getFirstName(auth?.user?.username)}</span>
            </button>
            {
              dropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white rounded shadow-lg p-4">
                <Link
                  href={"/dashboard/profile"}
                  className="block px-4 pt-2 font-medium text-sm text-secondary-dark hover:text-primary">
                  Account
                </Link>

                <Link
                  href={"/dashboard"}
                  className="block px-4 pt-2 font-medium text-sm text-secondary-dark hover:text-primary">
                  Dashboard
                </Link>

                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-4 pt-2 pb-2 font-medium text-sm text-secondary-dark hover:text-primary">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar