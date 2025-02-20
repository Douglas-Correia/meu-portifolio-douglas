import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import "aos/dist/aos.css";
import { AOSClient } from "@/components/AOSClient";


const montserrat = Montserrat({
   subsets: ["latin"], 
   weight: ["400", "700"],
  });

export const metadata: Metadata = {
  title: "Portfólio | Douglas Lincoln",
  description: "My portfolio to present my skills and services provided.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`montserrat.className bg-zinc-800 no-scrollbar`}>
        <Header />
        <AOSClient />
        {children}
        </body>
    </html>
  );
}
