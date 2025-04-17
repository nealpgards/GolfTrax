// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GolfTrax - Track Your Golf Journey',
  description: 'Track golf courses played across America, log scores, and collect course badges',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-md">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="text-2xl font-bold text-green-600">
                    GolfTrax
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/courses" className="border-transparent text-gray-500 hover:border-green-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Courses
                  </Link>
                  <Link href="/map" className="border-transparent text-gray-500 hover:border-green-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Map
                  </Link>
                  <Link href="/profile" className="border-transparent text-gray-500 hover:border-green-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Profile
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Log In
                </button>
                <button className="ml-4 bg-white text-green-600 border border-green-600 px-4 py-2 rounded-md text-sm font-medium">
                  Sign Up
                </button>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {/* Mobile menu button icon */}
                  <div className="h-6 w-6">Menu</div>
                </button>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">GolfTrax</h3>
                <p className="text-gray-300">Track your golf journey across America</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
                  <li><Link href="/courses" className="text-gray-300 hover:text-white">Courses</Link></li>
                  <li><Link href="/map" className="text-gray-300 hover:text-white">Map</Link></li>
                  <li><Link href="/profile" className="text-gray-300 hover:text-white">Profile</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-300">support@golftrax.com</p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-300">&copy; {new Date().getFullYear()} GolfTrax. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}