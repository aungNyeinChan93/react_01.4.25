import React, { useContext } from 'react';
import { AppContext } from '../themes/Master';


const SwitchBtn = () => {
    const { data, changeTheme } = useContext(AppContext);


    return (
        <React.Fragment>
            <a
                className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden"
                href="#"
                onClick={changeTheme}
            >
                <span
                    className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
                >
                    <h3 className={data.theme === 'dark' ? 'text-black' : 'text-white'}>{data.theme}</h3>
                </span>
            </a>
        </React.Fragment>
    );
};

export default SwitchBtn;