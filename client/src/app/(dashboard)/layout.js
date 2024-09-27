import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/authContext";
import AdminSidebar from "@/components/shared/AdminSidebar";
import AdminNavbar from "@/components/shared/AdminNavbar";
import { CartProvider } from "@/context/cartContext";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard | Agency",
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
          <div className="h-screen flex">

            {/* sidebar */}
            <div className="w-[14%] md:w-[20%] lg:w-[18%] xl:w-[14%] bg-white border-r-2">
              <AdminSidebar/>
            </div>

            {/* main content */}
            <div className="w-[86%] md:w-[80%] lg:w-[80%] xl:w-[86%] bg-secondary-lighter overflow-y-scroll px-4 lg:px-10 xl:px-20 flex flex-col">
              <AdminNavbar/>
              {children}
            </div>
          </div>
          <Toaster/>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
