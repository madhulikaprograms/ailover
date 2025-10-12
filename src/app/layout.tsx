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
  title: "AILOVER - AI Voice Companion",
  description: "Your AI-powered voice and chat companion for meaningful conversations",
};

interface Props{
    children: React.ReactNode; 
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className = "bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className = "w-full max-w-sm md:max-w-3xl">
              {children}
           </div>
        </div>
      </body>
    </html>
  );
}