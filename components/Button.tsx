import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'
const Button = () => {
  return (
    <div>
        <Link href="mailTo:ajaykanaujiya@example.com" className="text-sm flex items-center justify-center py-2 px-4  mr-4  bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-150">
        
        <AiOutlineMail className="w-4 h-4 mr-2" />
        Send Email
     
      </Link>
    </div>
  )
}

export default Button