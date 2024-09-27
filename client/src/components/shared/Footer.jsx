import Link from "next/link"
import ContainerBox from "./ContainerBox"
import FooterLink from "../ui/buttons/FooterLink"
import Image from "next/image"

const Footer = () => 
{
  return (
    <div className="mt-40">
      <ContainerBox>
        <div className="py-14">

          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-2 py-8 xl:gap-24 md:gap-32 gap-16">

            <div className="flex flex-col space-y-2">
              <span className="xl:text-base md:text-sm text-xs text-secondary-dark font-semibold pb-2 uppercase">Features</span>
              <FooterLink href={'/features#optimization'}>Optimization</FooterLink>
              <FooterLink href={'/features#optimization'}>PPC & Design</FooterLink>
              <FooterLink href={'/features#content'}>Content Creation</FooterLink>
              <FooterLink href={'/features#content'}>Anatlytics</FooterLink>
            </div>

            <div className="flex flex-col space-y-2">
              <span className="xl:text-base md:text-sm text-xs text-secondary-dark font-semibold pb-3 uppercase">Services</span>
              <FooterLink href={'/about-us#services'}>Communication</FooterLink>
              <FooterLink href={'/about-us#services'}>Team Management</FooterLink>
              <FooterLink href={'/about-us#services'}>Market Analysis</FooterLink>
              <FooterLink href={'/about-us#services'}>Client Relation</FooterLink>
            </div>
            
            <div className="flex flex-col space-y-2">
              <span className="xl:text-base md:text-sm text-xs text-secondary-dark font-semibold pb-3 uppercase">Community</span>
              <FooterLink href={'https://twitter.com'}>Twitter</FooterLink>
              <FooterLink href={'https://www.instagram.com'}>Instagram</FooterLink>
              <FooterLink href={'https://www.facebook.com'}>Facebook</FooterLink>
              <FooterLink href={'https://www.youtube.com'}>YouTube</FooterLink>
            </div>


            <div className="flex flex-col space-y-2">
              <span className="xl:text-base md:text-sm text-xs text-secondary-dark font-semibold pb-3 uppercase">Company</span>
              <FooterLink href={'/about-us/privacy-policy'}>Privacy Policy</FooterLink>
              <FooterLink href={'/about-us/terms-of-service'}>Terms of Service</FooterLink>
              <FooterLink href={'/contact'}>Contact Us</FooterLink>

            </div>
          </div>

          <div className="flex xl:flex-row md:flex-row flex-col justify-between items-center gap-5 pt-5 sm:flex-row opacity-50">
            <Link href={'/'}>
              <Image 
              src={'/logo.svg'}
              width={150}  
              height={150}
              alt='logo'
              className='w-16 h-auto xl:w-24 xl:h-auto'/>
            </Link>

            <p className="text-sm text-slate-500">
                © Copyright 2020 Insideout. All rights reserved.
            </p>

          </div>
        </div>
      </ContainerBox>
    </div>
  )
}

export default Footer