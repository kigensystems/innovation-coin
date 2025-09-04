import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: "Innovation Coin - Funding Tomorrow's Genius",
  description: "The cryptocurrency that funds education. Every transaction directly supports schools and students worldwide.",
  keywords: "cryptocurrency, blockchain, education, innovation, charity, web3",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Innovation Coin - Funding Tomorrow's Genius",
    description: "The cryptocurrency that funds education. Every transaction directly supports schools and students worldwide.",
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
      <body className={`${robotoMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
