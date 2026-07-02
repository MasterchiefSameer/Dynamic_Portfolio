import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sameer Gautam | Full Stack Developer",
  description:
    "Portfolio of Sameer Gautam, a Full Stack Developer building scalable web applications, REST APIs, and modern user interfaces.",
  openGraph: {
    title: "Sameer Gautam | Full Stack Developer",
    description:
      "Portfolio of Sameer Gautam, a Full Stack Developer building scalable web applications, REST APIs, and modern user interfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
