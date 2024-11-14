import React from 'react'

// type Props = {}

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-teal-600 text-white flex items-center justify-between px-8 shadow-md z-50">
      <div className="text-lg font-bold">PSV-Valencia</div>
      <nav className="space-x-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>
    </header>
  )
}

export default Header