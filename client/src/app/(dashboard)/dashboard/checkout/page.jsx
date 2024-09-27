import Checkout from "@/components/ui/admin/Checout";

export const metadata = {
    title: "Checkout | Agency",
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