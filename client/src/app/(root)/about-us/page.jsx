import OfferForm from "@/components/shared/OfferForm"
import Hero from "@/components/ui/about-us/Hero"
import OurTeam from "@/components/ui/about-us/OurTeam"
import Services from "@/components/ui/about-us/Services";
import Brands from "@/components/ui/home/Brands"

export const metadata = {
  title: "About Us | Agency ",
  description: "This is a marketing agency application",
};

const page = () => 
{
  return (
    <main>
      <Hero/>
      <Brands/>
      <OurTeam/>
      <Services/>
      <OfferForm/>
    </main>
  )
}

export default page