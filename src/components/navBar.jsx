import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../utility/commonStyles';

const NavBar = () => {
    return (
        <nav className='bg-light d-flex justify-content-between align-items-center'>
            <div>
                My To Dos
            </div>
            <ul className='d-flex m-0 list-unstyled'>
                <li className={ `${styles.navLink}` }>
                    <Link to="/">Tasks</Link>
                </li>
                <li className={ `${styles.navLink}` }>
                    <Link to="/login">Login</Link>
                </li>
                <li className={ `${styles.navLink}` }>
                    <Link to='/admin'>Admin</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;