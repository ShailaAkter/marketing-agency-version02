import ManageProfile from "@/components/ui/admin/ManageProfile";

export const metadata = {
    title: "Profile | Dashboard ",
    description: "This is a marketing agency application",
  };
  
  const page = () => 
  {
    return (
      <main>
        <ManageProfile/>
      </main>
    )
  }
  
  export default page