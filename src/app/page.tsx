import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div>
      <ul className='ml-6'>
        <Link  className='ml-6' href={"/home"}>Home</Link>
        <Link href={"/contact"}>Contact Us</Link>
        <Link href={"/search"}>Search</Link>
      </ul>
    </div>
  )
}
