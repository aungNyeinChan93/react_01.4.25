import React, { createContext, useState } from 'react';
import App from '../App';
export const MasterContext = createContext();

const Master = () => {
    let [data, setData] = useState({
        theme: 'dark',
    })
    const changeTheme = () => {
        data.theme === 'dark' ? setData({ ...data, theme: 'light' }) : setData({ ...data, theme: 'dark' })
    }
    return (
        <MasterContext.Provider value={{ data, changeTheme }}>
            <div className={data.theme === 'dark' ? "bg-gray-800" : 'bg-gray-100'}>
                <App />
            </div>
        </MasterContext.Provider>
    );
};

export default Master;