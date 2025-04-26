import React from 'react';

const Pannel = ({ children }) => {
    return (
        <React.Fragment>
            <div className='mx-4 text-center my-2 px-2 py-2 rounded-lg bg-gray-400 hover:bg-gray-600 text-white text-lg'>
                {children}
            </div>
        </React.Fragment>
    );
};

export default Pannel;


/**
 * vue in slot ,react in props.children
 */