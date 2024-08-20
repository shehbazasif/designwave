import React from 'react'
import Link from 'next/link'

export default function search() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
            <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Our Services</h1>
        <nav>
          <Link className="text-gray-300 hover:text-white px-3" href="http://localhost:3000/">
            Home
          </Link>
          <Link className="text-gray-300 hover:text-white px-3" href="/about">
            About
          </Link>
          <Link className="text-gray-300 hover:text-white px-3" href="/services">
            Services
          </Link>
          <Link className="text-gray-300 hover:text-white px-3" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
    <main className="py-8">
      <div className="container mx-auto px-4">
        <section id="developer-teams" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Developer Teams</h2>
          <p className="text-lg mb-6">
            Our skilled developers are dedicated to building robust, scalable, and high-performance software solutions. Whether you need a web application, mobile app, or custom software, our developers have the expertise to deliver exceptional results.
          </p>
          <ul className="list-disc pl-5">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Custom Software Solutions</li>
            <li>API Integration</li>
          </ul>
        </section>

        <section id="designers" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Designers</h2>
          <p className="text-lg mb-6">
            Our creative designers specialize in crafting visually stunning and user-friendly interfaces. From branding to UI/UX design, our team ensures that your product not only looks great but also provides a seamless user experience.
          </p>
          <ul className="list-disc pl-5">
            <li>UI/UX Design</li>
            <li>Branding and Identity</li>
            <li>Graphic Design</li>
            <li>Prototyping and Wireframing</li>
          </ul>
        </section>

        <section id="customer-support">
          <h2 className="text-3xl font-bold mb-4">Customer Support</h2>
          <p className="text-lg mb-6">
            Our customer support team is committed to providing exceptional service and support to our clients. We offer various channels to assist with your needs, ensuring you have the best experience with our products and services.
          </p>
          <ul className="list-disc pl-5">
            <li>24/7 Support</li>
            <li>Technical Assistance</li>
            <li>Account Management</li>
            <li>Feedback and Improvement</li>
          </ul>
        </section>
      </div>
    </main>

    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 MyCompany. All rights reserved.</p>
      </div>
    </footer>
  </div>
  )
}
