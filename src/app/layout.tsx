"use client";

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './navbar'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const inter = Inter({ subsets: ['latin'] })

const disableNavbar = ["/login", "/register"]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const [state, setState] = useState(0)
  const pathname = usePathname();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  });
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          {!disableNavbar.includes(pathname) && <Navbar />}
          {children}
        </SessionProvider>
        </body>
    </html>
  )
}
