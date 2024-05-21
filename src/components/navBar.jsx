import React from 'react';

const NavBar = () => {
    return (
        <ul className='navbar-nav text-center'>
            <li className='nav-item'>
                <a className='nav-link' href='/'>Home</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href='/'>Login</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href='/'>Admin</a>
            </li>
        </ul>
    )
}
export default NavBar;