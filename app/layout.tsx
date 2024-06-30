"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";
import Lenis from "lenis";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {loading ? (
          <Preloader />
        ) : (
          <div>
            <Navbar />
            {children}
            <NewsLetter />
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
