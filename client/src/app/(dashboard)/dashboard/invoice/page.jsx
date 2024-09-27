import Invoice from "@/components/ui/admin/Invoice";

export const metadata = {
    title: "Invoices | Dashboard ",
    description: "This is a marketing agency application",
  };
  
  const page = () => 
  {
    return (
      <main>
        <Invoice/>
      </main>
    )
  }
  
  export default page