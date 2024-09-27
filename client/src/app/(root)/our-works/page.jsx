import OfferForm from "@/components/shared/OfferForm"
import Reviews from "@/components/ui/home/Reviews"
import WhyUs from "@/components/ui/home/WhyUs"
import Hero from "@/components/ui/ourWorks/Hero"
import OurWorks from "@/components/ui/ourWorks/OurWorks"

export const metadata = {
  title: "Our Works | Agency ",
  description: "This is a marketing agency application",
};

const page = () => 
{
  return (
    <main>
      <Hero/>
      <OurWorks/>
      <Reviews/>
      <OfferForm/>
    </main>
  )
}

export default page