import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { AuthProvider } from "@/context/authContext";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/context/cartContext";



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
          <CartProvider>
            <Header/>
              {children}
              <Toaster/>
            <Footer/>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
