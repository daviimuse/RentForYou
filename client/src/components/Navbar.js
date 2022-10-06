import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="navBar">
        <ul>
        <Link className="site-title"  to='/'>RentForYou</Link>    
            <CustomLink to="/User">Account</CustomLink>
            <CustomLink to="/Contacts">Contacts</CustomLink>
            <CustomLink to="/About">About</CustomLink>
        </ul>
    </nav>
    );
}

function CustomLink({to, children, ...props}){
    const path = window.location.pathname;    
    return (
        <li className={path === to ? "active" : " "}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}