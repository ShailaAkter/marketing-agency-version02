import OfferForm from "@/components/shared/OfferForm";
import AboutUs from "@/components/ui/home/AboutUs";
import Brands from "@/components/ui/home/Brands";
import { Features } from "@/components/ui/home/Features";
import Hero from "@/components/ui/home/Hero";
import Map from "@/components/ui/home/Map";
import OurWorks from "@/components/ui/home/OurWorks";
import Quetions from "@/components/ui/home/Quetions";
import Reviews from "@/components/ui/home/Reviews";
import Stats from "@/components/ui/home/Stats";
import WhyUs from "@/components/ui/home/WhyUs";

export default function Home() 
{
  return (
    <main>
      <Hero/>
      <AboutUs/>
      <Stats/>
      <Features/>
      <OurWorks/>
      <WhyUs/>
      <Brands/>
      <Reviews/>
      <Quetions/>
      <OfferForm/>
      <Map/>
    </main>
  )
}
