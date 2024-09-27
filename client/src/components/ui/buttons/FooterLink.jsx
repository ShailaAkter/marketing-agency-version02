import Link from 'next/link'
import React from 'react'

const FooterLink = ({children, href}) => 
{
  return (
    <Link 
      href={href}
      className='xl:text-sm md:text-sm text-xs text-secondary-light'>
        {children}
    </Link>
  )
}

export default FooterLink