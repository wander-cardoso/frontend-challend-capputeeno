import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const saira = Saira({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desafio Front end",
  description: "O objetivo deste desafio é avaliar minhas habilidades de programação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body className={saira.className}>
        {children}
      </body>
    </html>
  );
}
