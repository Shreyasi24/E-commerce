import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <header className="text-gray-600 body-font shadow-lg">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <Link to="/" className="flex title-font font-medium items-center text-gray-900 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">E-commerce</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a href='#' className="mr-5 hover:text-gray-900">Home</a>
      <a href='#' className="mr-5 hover:text-gray-900">About Us</a>
      <a href='#' className="mr-5 hover:text-gray-900">Product Review</a>
      <a href='#' className="mr-5 hover:text-gray-900">Contact</a>
    </nav>
    <Link to="/cart" className="inline-flex items-center bg-blue-500 text-white border-0 py-2 px-4 focus:outline-none hover:bg-blue-700 rounded text-base md:mt-0">Go to Cart
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
</header>
  
  )
}

export default Header