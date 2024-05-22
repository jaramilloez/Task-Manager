import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='bg-dark'>
            <div>

            </div>
            <ul className='d-flex'>
                <li>
                    <Link to="/">Tasks</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link tp='/admin'>Admin</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;