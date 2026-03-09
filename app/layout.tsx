import type { Metadata } from "next";
import { Inter, Krub } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const krub = Krub({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-krub" });

export const metadata: Metadata = {
  title: "Kirana Moore - Product Designer",
  description: "Product designer portfolio showcasing UX/UI design, AR/VR experiences, and creative technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${krub.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
