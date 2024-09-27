import Link from "next/link"

const RegularButton = ({children, href}) => 
{
  return (
    <Link 
      href={href}
      className="block bg-primary hover:bg-orange-600 hover:opacity-85 text-white group-hover:text-white text-sm xl:text-lg font-semibold px-5 md:px-6 lg:px-7 xl:px-8 py-3 md:py-3 lg:py-3 xl:py-4 rounded-lg duration-100 transition-all text-center">
        {children}
    </Link>
  )
}

export default RegularButton