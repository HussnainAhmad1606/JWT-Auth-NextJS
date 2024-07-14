import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
        <Link href={"/login"}><button>Login</button></Link>
        <Link href={"/signup"}><button>Signup</button></Link>
        <Link href={"/dashboard"}><button>Dashboard</button></Link>
    </div>
  )
}

export default Navbar