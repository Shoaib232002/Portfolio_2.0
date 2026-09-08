import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedCursor } from "@/components/animated-cursor";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohammed Shoaib | Portfolio",
  description: "A professional portfolio website showcasing my work and skills",
  generator: "v0.dev",
  icons: {
    icon: "/ms-logo.svg",
    shortcut: "/ms-logo.svg",
    apple: "/ms-logo.svg",
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <div className="flex gap-6 md:gap-10">
                <Link href="/" className="flex items-center gap-3 group">
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-purple-600 to-amber-500 p-[2px] shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/30">
                    <div className="w-full h-full bg-background dark:bg-zinc-950 rounded-[10px] flex items-center justify-center transition-colors">
                      <span className="font-extrabold text-base tracking-wider bg-gradient-to-r from-primary via-purple-500 to-amber-500 bg-clip-text text-transparent">
                        MS
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-lg tracking-tight hidden sm:inline-block">
                    Mohammed <span className="text-primary">Shoaib</span>
                  </span>
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <nav className="flex items-center space-x-1 sm:space-x-2">
                  <a
                    href="#about"
                    className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    Skills
                  </a>
                  <a
                    href="#contact"
                    className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
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
