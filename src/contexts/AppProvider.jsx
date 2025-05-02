import React, { createContext, use, useEffect, useState } from 'react';
import { fetchUser } from '../database/db';

export const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [global, setGlobal] = useState({
        name: 'global',
        app: 'react tuto-1',
        users: []
    });

    useEffect(() => {
        async function getUser() {
            let fetchUsers = await fetchUser();
            setGlobal((global) => ({ ...global, users: fetchUsers }));
        };
        getUser();
    }, [])

    const changeName = (payload) => {
        setGlobal((pre) => {
            return { ...pre, name: payload }
        })
    }

    return (
        <AppContext.Provider value={{ name: 'appContext', global, setGlobal, changeName }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;

