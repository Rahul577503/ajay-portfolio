import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ajay Kanujiya",
  description: " I am a passionate developer with expertise in Ruby on Rails,JavaScript, HTML, CSS, Node.js, and PostgreSQL. I have a strong background in building scalable web applications and managing cloud infrastructure.",
  openGraph: {
    title: 'Ajay Kanaujiya Portfolio',
    description: 'A Front-End engineer based in India',
    url: `ajaykanaujiya.vercel.app/`,
    siteName: 'Ajay Kanaujiya Portfolio',
    images: [
      {
        url: `/ajay.jpg`,
        width: 1200,
        height: 630,
        alt: 'Ajay Kanaujiya Portfolio',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} line-height-[1.5] antialiased tracking-[.15em]`}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}