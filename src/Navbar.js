import React from 'react'

export default function Navbar() {
    const path = window.location.pathname
    return (
        <nav className="nav">
            <a href="/" className="site-title">Site Name</a>
            <ul>
                <CustomLink href="/pricing">Pricing</CustomLink>
                <CustomLink href="/about">About</CustomLink> 
            </ul>
        </nav>
  )
}

function CustomLink({href,children, ...props}){
    const path = window.location.pathname
    return (
        <li className={path === href ? "active": ""}>
            <a href={href}>{children}</a>
        </li>
    )
}