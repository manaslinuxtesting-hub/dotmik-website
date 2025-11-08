"use client"; 
import './globals.css';
import 'aos/dist/aos.css'; 
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { Inter, Poppins } from 'next/font/google';
import { useEffect } from 'react';
import AOS from 'aos';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-poppins' });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true, 
    });
  }, []);

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-poppins">
        <Header />
        <div className="relative">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
