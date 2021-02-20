import React from "react";
import { authService } from './../Fbase';

const Profile = () =>{
    const onClick=()=>{
        authService.signOut();
    }
    return(
        <div>
            <button onClick={onClick}>LOG OUT</button>
        </div>
    );
}

export default Profile;