import type { Metadata } from "next";
import { Geist, Geist_Mono, Lilita_One } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lilitaOne = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lilita-one",
});

export const metadata: Metadata = {
  title: "CodiMaths – International Space Science Olympiad (ISSO)",
  description:
    "CodiMaths is an interactive platform for students worldwide to register and participate in the International Space Science Olympiad (ISSO), enhancing knowledge in space science, critical thinking, and problem-solving skills.",
  keywords: [
    "International Space Science Olympiad",
    "ISSO",
    "CodiMaths",
    "Space Olympiad",
    "Science Olympiad India",
    "Student Science Competitions",
    "Global Olympiad Registration",
    "Space Science Quiz",
    "ISRO Olympiad",
    "School Science Exam",
    "STEM Competition",
    "Astronomy Olympiad",
    "Science Challenge for Students",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "CodiMaths – International Space Science Olympiad (ISSO)",
    description:
      "Register now for the International Space Science Olympiad and test your skills in space science, problem-solving, and critical thinking. Open to students across the globe!",
    url: "https://yourdomain.com",
    siteName: "CodiMaths",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lilitaOne.variable} antialiased`}
      >
        {children}
        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
