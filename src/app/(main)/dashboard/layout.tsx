import { Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import React from "react";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/lib/index";
import { Navbar } from "@/lib/components";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

function ApplicationLayout({
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
        </ThemeProvider>
      </body>
    </html>
  );
}
export default ApplicationLayout;
