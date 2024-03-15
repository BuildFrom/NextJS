import { Inter } from "next/font/google";
import "@/styles/globals.css";
import React from "react";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/lib/index";
const inter = Inter({ subsets: ["latin"] });

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("", inter.className)}>
        <ThemeProvider defaultTheme="light" attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
