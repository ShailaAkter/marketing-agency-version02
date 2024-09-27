import ForgotPassword from "@/components/ui/auth/ForgotPassword";

export const metadata = {
  title: "Forgot Password | Agency ",
  description: "This is a marketing agency application",
};

const page = () => 
{
  return (
    <main>
      <ForgotPassword/>
    </main>
  )
}

export default page