import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Roy Chandra Telaumbanua",
  description: "Portofolio",
  icons: {
    icon: [
      {
        url: "/favicon-portofolio/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-portofolio/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: "/favicon-portofolio/apple-touch-icon.png",
  },
  manifest: "/favicon-portofolio/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
