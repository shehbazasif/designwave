import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex items-center justify-between">
      <div className="text-white text-2xl font-semibold">
        <Link href="/">MyApp</Link>
      </div>
      <button>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <div>
        <div className="space-x-4">
          <Link href="http://localhost:3000/" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
      </div>
    </div>
  </nav>
  )
}
