import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../utility/commonStyles';

const NavBar = ({ user }) => {
    return <nav className='px-4 mb-4 bg-light d-flex justify-content-between align-items-center text-nowrap'>
        <div className={ `${styles.navTitle}` }>
            <Link to='/'>My To Dos</Link>
        </div>
        <ul className='m-0 d-flex list-unstyled'>
            <li className={ `${styles.navLink}` }>
                <Link to="/">Home</Link>
            </li>
            {!user && (
                <React.Fragment>
                    <li className={ `${styles.navLink}` }>
                        <Link to='/signUpForm'>Sign Up</Link>
                    </li>
                    <li className={ `${styles.navLink}` }>
                        <Link to="/login">Log In</Link>
                    </li>
                </React.Fragment>
            )}
            {user && (
                <React.Fragment>
                    <li className={ `${styles.navLink} fst-italic` }>
                        Welcome, { user.name }!
                    </li>
                    <li className={ `${styles.navLink}` }>
                        <Link to="/profile">
                            <FontAwesomeIcon icon={ faUser } />
                        </Link>
                    </li>
                </React.Fragment>
            )}
        </ul>
    </nav>
}
export default NavBar;