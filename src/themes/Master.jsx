import React, { createContext, useState } from 'react';
import App from '../App';
export const AppContext = createContext();

const Master = () => {
    let [data, setData] = useState({
        theme: 'dark',
    })
    const changeTheme = () => {
        data.theme === 'dark' ? setData({ ...data, theme: 'light' }) : setData({ ...data, theme: 'dark' })
    }
    return (
        <AppContext.Provider value={{ data, changeTheme }}>
            <div className={data.theme === 'dark' ? "bg-gray-800" : 'bg-gray-100'}>
                <App />
            </div>
        </AppContext.Provider>
    );
};

export default Master;