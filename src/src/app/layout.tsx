import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/core/SmoothScrolling";
import Header from "@/components/layout/Header";
import CustomCursor from "@/components/core/CustomCursor";
import { CursorProvider } from "@/context/CursorContext";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kirana - Creative Portfolio",
  description: "A portfolio of creative work by Kirana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-black text-white")}>
        <CursorProvider>
          <CustomCursor />
          <SmoothScrolling>
            <Header />
            {children}
            <Footer />
          </SmoothScrolling>
        </CursorProvider>
      </body>
    </html>
  );
}
