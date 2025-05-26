'use client';

import { useContext, useEffect, useState } from 'react';
import UserContext from '@/context/userContext'; 

const UserProfile = () => {

    const { user } = useContext(UserContext)
    console.log(user)
   
    return (
        <div>
            <h3>{user?.name}</h3>
             <img src={user?.profileURL} alt="" />
        </div>
    );
};

export default UserProfile;
