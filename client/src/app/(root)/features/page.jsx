import OfferForm from "@/components/shared/OfferForm"
import FeatureSection1 from "@/components/ui/features/FeatureSection1"
import FeatureSection2 from "@/components/ui/features/FeatureSection2"
import Hero from "@/components/ui/features/Hero"
import Subscriptions from "@/components/ui/features/Subscriptions"


export const metadata = {
  title: "Features | Agency ",
  description: "This is a marketing agency application",
};

const page = () => 
{
  return (
    <main>
      <Hero/>
      <FeatureSection1/>
      <FeatureSection2/>
      <Subscriptions/>
      <OfferForm/>
    </main>
  )
}

export default page