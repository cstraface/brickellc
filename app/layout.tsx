import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { UserProvider } from '@/lib/auth';
import { getUser } from '@/lib/db/queries';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Next.js SaaS Starter',
  description: 'Get started quickly with Next.js, Postgres, and Stripe.',
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userPromise = getUser();

  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
    >
      <body className="min-h-[100dvh] bg-gray-50 flex flex-col">
        <UserProvider userPromise={userPromise}>
          <main className="flex-grow">{children}</main> {/* Ensures footer stays at bottom */}
        </UserProvider>

        {/* Footer Section */}
        <footer className="bg-gray-900 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm">© {new Date().getFullYear()} Brick Enterprises LLC. All rights reserved.</p>
            <div className="mt-3 flex justify-center space-x-6">
              <a href="/about" className="text-gray-400 hover:text-white text-sm">About</a>
              <a href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</a>
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            </div>
          </div>
        </footer>

        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
