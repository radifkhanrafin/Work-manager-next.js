'use client';

import React, { useEffect, useState } from 'react';
import UserContext from '@/context/userContext';
import { getCurrentUser } from '@/httpsHelper/currentUser';
import { toast } from 'react-toastify';

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {

        // Call async function inside useEffect
        const fetchUser = async () => {
            try {
                const currentUser = await getCurrentUser();
                setUser(currentUser);
                // console.log(currentUser);
            } catch (error) {
                toast.error(`${error.message}`,)
                console.log("Error fetching user:", error.message);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
