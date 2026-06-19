import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:"Blue lotus",
  keywords: [
    "Blue Lotus Spa",
    "Expert staff available  ",
    "best spa in chembur",
    "Massage",
    "Luxury Spa",
    "Wellness",
    "Body Massage",
    "Relaxation Therapy",
    "Spa in chembur",
  ],
  icons: {
    icon: [
      { url: "/favicon/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
       >
       <head>
        <meta name="google-site-verification" content="OV12FSQ8-x-MaGZb6wGVQMW46QcXtAu0X-3oHRa7EnA" />
        </head>

      <body className="min-h-full flex flex-col">
        <Header />

        {children}

        <Footer />
    
      </body>
    </html>
  );
}
