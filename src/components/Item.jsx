import React from 'react';

const Item = ({ id, task, status, remove }) => {
    return (
        <React.Fragment>
            <article className="max-w-[600px] mx-auto mt-4 flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className='flex justify-center items-center'>

                    <p className='flex-4'><span className="text-2xl font-medium text-gray-900 dark:text-white"> {task} </span></p>
                    <button onClick={() => remove(id)} className="text-xs font-medium !bg-red-600"> Delete </button>
                </div>
            </article>
        </React.Fragment>
    );
};

export default Item;