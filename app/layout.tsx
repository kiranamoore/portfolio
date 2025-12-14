import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CursorProvider } from '@/context/CursorContext';
import CustomCursor from '@/components/core/CustomCursor';

export const metadata: Metadata = {
  title: 'Kirana Moore - Designer & Developer',
  description: 'Portfolio of Kirana Moore',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ fontFamily: 'var(--font-inter)' }}>
      <body suppressHydrationWarning> {/* Temp fix for Grammarly */}
        <CursorProvider>
          <CustomCursor />
          <Header />
          <main className="pt-20"> {/* ~80px padding for fixed Header */}
            {children}
          </main>
          <Footer />
        </CursorProvider>
      </body>
    </html>
  );
}