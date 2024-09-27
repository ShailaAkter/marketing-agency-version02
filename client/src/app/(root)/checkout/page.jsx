import Checkout from "@/components/shared/Checkout";


export const metadata = {
  title: "Payment | Agency ",
  description: "This is a marketing agency application",
};

const page = () => 
{
  return (
    <main>
      <Checkout/>
    </main>
  )
}

export default page