import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedCursor } from "@/components/animated-cursor";
import Image from "next/image";
import BackToTop from "@/components/BackToTop";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Professional Portfolio",
  description: "A professional portfolio website showcasing my work and skills",
  generator: "v0.dev",
  icons: {
    icon: "/text_logo.png", // Ensure this file is in the public/ directory
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
              <div className="flex gap-6 md:gap-10">
                <a href="/" className="flex items-center space-x-2">
                  <Image
                    src="/text_logo.png"
                    alt="MF Logo"
                    width={70}
                    height={32}
                    className="rounded-full"
                    style={{ height: 'auto' }}  // This tells browser to auto-scale height preserving aspect ratio
                  />

                  {/* <span className="inline-block font-bold text-lg">Portfolio</span> */}
                </a>
              </div>

              <div className="flex flex-1 items-center justify-end space-x-4">
                <nav className="flex items-center space-x-1">
                  <a
                    href="#about"
                    className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    Skills
                  </a>
                  <a
                    href="#contact"
                    className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                  <ThemeToggle />
                </nav>
              </div>
            </div>
          </header>
          {children}
          <BackToTop />
          <AnimatedCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
