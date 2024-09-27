import ManagePlans from "@/components/ui/admin/ManagePlans";

export const metadata = {
    title: "Subscription Plans | Dashboard ",
    description: "This is a marketing agency application",
  };
  
  const page = () => 
  {
    return (
      <main>
        <ManagePlans/>
      </main>
    )
  }
  
  export default page