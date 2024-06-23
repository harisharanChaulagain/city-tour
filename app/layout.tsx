import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghumfir Nepal",
  description:
    "Ghumfir Nepal is a travel company dedicated to providing personalized urban exploration experiences. Whether you are a solo traveler, a couple, a family, or a group of friends, we tailor our tours to suit your interests, ensuring that you see the city through a local's eyes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" max-w-screen-2xl mx-auto ">
          <Navbar />
          {children}
          <NewsLetter />
          <Footer />
        </div>
      </body>
    </html>
  );
}
