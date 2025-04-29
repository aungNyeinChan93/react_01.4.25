import React from 'react';

const List = ({ children }) => {
    return (
        <React.Fragment>
            <div className='px-4 py-2 overflow-hidden  rounded-lg shadow bg-gray-300 min-h-screen  w-full container mx-auto mt-10'>
                {children}
            </div>
        </React.Fragment>
    );
};

export default List;