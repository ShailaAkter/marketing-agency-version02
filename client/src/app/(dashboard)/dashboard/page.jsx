import Admin from "@/components/ui/admin/Admin";

export const metadata = {
    title: "Home | Dashboard ",
    description: "This is a marketing agency application",
  };
  
  const page = () => 
  {
    return (
      <main>
        <Admin/>
      </main>
    )
  }
  
  export default page