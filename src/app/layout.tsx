import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "@next/font/local"

const Octosuare = localFont({
  src:[
    {
      path:'../../public/fonts/Instruction.otf',
      weight: '400'
    }
  ],
  variable: '--font-octo'
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Squid Makes",
  description: "Can you believe squids can do that?!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Octosuare.variable} font-sans`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
