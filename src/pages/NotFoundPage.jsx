import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className='w-full min-h-screen bg-[#E5E0DE]'>
      <h1 className='font-poppins font-semibold ss:text-[52px] text-[32px] text-black ss:leading-[50px] leading-[40px] mx-[5%] mb-10'>Error: Page not found</h1>
      <Link to="/" className="bg-[#4E4A49] hover:bg-[#322D2B] text-white font-bold py-3 px-6 rounded-lg sm:text-xl lg:text-2xl mx-[5%] mt-6">Back to home</Link>
    </div>  )
}

export default NotFoundPage