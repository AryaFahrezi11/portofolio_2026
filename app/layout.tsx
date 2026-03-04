import type { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBackground from "@/components/ClientBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

// KODE SEO DIMASUKKAN DI SINI (Karena file ini sekarang Server Component)
export const metadata: Metadata = {
  title: 'Arya Fahrezi Amarully | Web & IoT Developer',
  description: 'Portofolio resmi Arya Fahrezi Amarully - Software Engineer dengan 2+ tahun pengalaman dalam Web Development dan IoT. Spesialisasi JavaScript, React, Next.js, Node.js, dan Arduino.',
  keywords: [
    'Arya Fahrezi', 
    'Amarully',
    'Portfolio', 
    'Web Developer', 
    'IoT Developer', 
    'Software Engineer', 
    'Next.js', 
    'React', 
    'Tegal',
    'Indonesia'
  ],
  openGraph: {
    title: 'Arya Fahrezi Amarully - Portfolio',
    description: 'Jelajahi proyek-proyek inovatif saya, dari pengembangan web, mobile, hingga solusi IoT.',
    url: 'https://aryafahreziamarully.vercel.app',
    siteName: 'Arya Fahrezi Portfolio',
    images: [
      {
        // Gambar ini akan muncul saat link webmu di-share di WA/Telegram/LinkedIn
        url: 'https://aryafahreziamarully.vercel.app/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Preview Portofolio Arya Fahrezi',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id"> {/* Diganti jadi 'id' agar Google mengenali bahasanya */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* Background dipanggil dari Client Component yang tadi kita buat */}
        <ClientBackground />

        {/* Content - Responsive container */}
        <div className="relative z-10 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}