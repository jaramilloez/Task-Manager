import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../utility/commonStyles';

const NavBar = () => {
    return <nav className='bg-light d-flex justify-content-between align-items-center px-4 mb-4 text-nowrap'>
        <div className={ `${styles.navTitle}` }>
            My To Dos
        </div>
        <ul className='d-flex m-0 list-unstyled'>
            <li className={ `${styles.navLink}` }>
                <Link to="/">Home</Link>
            </li>
            <li className={ `${styles.navLink}` }>
                <Link to='/signUpForm'>Sign Up</Link>
            </li>
            <li className={ `${styles.navLink}` }>
                <Link to="/login">Log In</Link>
            </li>
        </ul>
    </nav>
}
export default NavBar;