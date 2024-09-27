import SignUp from "@/components/ui/auth/SignUp"

export const metadata = {
  title: "Sign Up | Agency ",
  description: "This is a marketing agency application",
};

const page = () => 
{
  return (
    <main>
      <SignUp/>
    </main>
  )
}

export default page