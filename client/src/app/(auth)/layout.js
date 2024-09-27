import { Inter } from "next/font/google";
import "../globals.css";
import { AuthProvider } from "@/context/authContext";
import { Toaster } from "react-hot-toast";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Agency ",
  description: "This is a marketing agency application",
  icons: {
    icon: '../logo.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster/>
        </AuthProvider>
      </body>
    </html>
  );
}
