// app/layout.tsx
import type { Metadata } from "next";
import { Rubik } from "next/font/google"; // ou qualquer outra disponível
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// REMOVA os imports de SlickCarouselComponent e BarberInfo AQUI
// import SlickCarouselComponent from "@/components/SlickCarouselComponent/SlickCarouselComponent";
// import BarberInfo from "@/components/BarberInfo/BarberInfo";

import "./globals.css";
// Mantenha os imports de CSS do Slick Carousel aqui ou em globals.css, pois são globais
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-lubrifont"
});

export const metadata: Metadata = {
  title: "Barbearia Domini Henry",
  description: "Landing Page info app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={rubik.variable}>
      <body className="flex flex-col min-h-screen font-[var(--font-lubrifont)]">
        <Header />
        {/* Estes componentes devem estar DENTRO do 'main' ou como parte do 'children' */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}