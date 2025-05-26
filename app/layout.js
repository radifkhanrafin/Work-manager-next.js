import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./component/header";
import connectDB from "@/database/Database Connect/db";
import Footer from "./component/footer";
import { ToastContainer } from "react-toastify";
import UserProvider from "@/provider/userProvider"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Work Manager : Your Daily Task",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <UserProvider>
          <ToastContainer />
          <div className="  bg-gray-200  py-5 ">
            <Header />

          </div>
          <div className="min-h-[189vh] w-[95%] mx-auto px-5"> {children}</div>
          <div>
            <Footer />
          </div>
        </UserProvider>
      </body>
    </html>
  );
}



