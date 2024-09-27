import TeamMembers from "@/components/ui/admin/TeamMembers";

export const metadata = {
    title: "Team Members | Dashboard ",
    description: "This is a marketing agency application",
  };
  
  const page = () => 
  {
    return (
      <main>
        <TeamMembers/>
      </main>
    )
  }
  
  export default page