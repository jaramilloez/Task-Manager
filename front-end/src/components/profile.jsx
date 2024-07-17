import React from 'react';
import { logOut } from '../services/authService';

const Profile = () => {
    return <div>
        <button onClick={ () => {
            logOut();
            window.location = '/';
        }}>
            logOut
        </button>
    </div>
}
 
export default Profile;