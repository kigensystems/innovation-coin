import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: "Innovation Coin - Funding Tomorrow's Genius",
  description: "A revolutionary cryptocurrency where 100% of transaction fees fund education and nurture the next generation of innovators.",
  keywords: "cryptocurrency, blockchain, education, innovation, charity, web3",
  openGraph: {
    title: "Innovation Coin - Funding Tomorrow's Genius",
    description: "A revolutionary cryptocurrency where 100% of transaction fees fund education.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
