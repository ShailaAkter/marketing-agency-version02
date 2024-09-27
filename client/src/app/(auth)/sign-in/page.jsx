import SignIn from "@/components/ui/auth/SignIn"

export const metadata = {
  title: "Sign In | Agency ",
  description: "This is a marketing agency application",
};

const page = () => 
{
  return (
    <main>
      <SignIn/>
    </main>
  )
}

export default page