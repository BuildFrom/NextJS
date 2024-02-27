import { Viewport, Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import React from "react";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/lib/index";
import { Navbar } from "@/components/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the home page!",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

function IntroLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sfo antialiased",
          inter.className
        )}
      >
        <ThemeProvider defaultTheme="light" attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default IntroLayout;
