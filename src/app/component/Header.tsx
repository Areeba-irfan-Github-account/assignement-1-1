
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div>
             <Link href="/" className='btn'>
             Home
             </Link>
            <Link href="/page1" className="btn">
                Page-1
            </Link>
            <Link href="/page2" className="btn">
                page-2
            </Link>
            
            </div>
    )
}

export default Header