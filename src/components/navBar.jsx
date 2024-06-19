import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../utility/commonStyles';

const NavBar = () => {
    return <nav className='px-4 mb-4 bg-light d-flex justify-content-between align-items-center text-nowrap'>
        <div className={ `${styles.navTitle}` }>
            <Link to='/'>My To Dos</Link>
        </div>
        <ul className='m-0 d-flex list-unstyled'>
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