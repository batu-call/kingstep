import type { Metadata, Viewport } from "next";
import { Kaushan_Script } from "next/font/google";
import "./globals.css";

const kaushan = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kaushan",
});

export const metadata: Metadata = {
  title: "Kingstep | Premium Sneakers",
  description: "Premium streetwear sneakers. The street is yours.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#181818",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={kaushan.variable}>
      <body>{children}</body>
    </html>
  );
}