// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
// Mantenha os imports de CSS do Slick Carousel aqui ou em globals.css, pois são globais
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const lubrifont = localFont({
  src: [
    {
      path: '../../public/fonts/WDXLLubrifontTC-Regular.ttf', // <--- AJUSTE O NOME DO ARQUIVO SE NECESSÁRIO
      weight: '400', // Se a fonte tiver um peso específico (e.g., Regular)
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-lubrifont', // Mantemos o nome da variável CSS que você já usa
});

export const metadata: Metadata = {
  title: "Barbearia Domini Henry",
  description: "Landing Page info app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={
      lubrifont.variable}>
      <body className="flex flex-col min-h-screen font-[var(--font-lubrifont)]">
        <Header />
        {/* Estes componentes devem estar DENTRO do 'main' ou como parte do 'children' */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}