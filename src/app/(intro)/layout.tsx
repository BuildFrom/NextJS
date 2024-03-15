import { Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import React from "react";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/lib/index";
import { Navbar, Footer } from "@/components/index";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

import { SEO } from "@/lib/components/SEO";

export const metadata = SEO({
  title: `New Title`,
  description: "Welcome to the home page",
  canonicalUrlRelative: "/",
});

function IntroLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className)}>
        <ThemeProvider defaultTheme="light" attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default IntroLayout;
