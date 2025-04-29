import React, { useRef } from 'react';

const AddTodo = ({ addTodo }) => {
    const taskRef = useRef();
    return (
        <React.Fragment>
            <div className='px-4 py-2 overflow-hidden  rounded-lg shadow bg-gray-300 w-full container mx-auto mt-10'>
                <form className='text-center' onSubmit={(e) => {
                    e.preventDefault();
                    const newTodo = {
                        id: Math.random().toFixed(1).toString(),
                        task: taskRef.current.value,
                        status: false
                    };
                    addTodo(newTodo);
                    e.currentTarget.reset();
                }}>
                    <label htmlFor="Email" className='inline-block w-[600px] me-5'>
                        <span className="text-sm font-medium text-gray-700 ]"> Task </span>
                        <input
                            ref={taskRef}
                            type="text"
                            id="text"
                            className="mt-0.5 py-2 w-full rounded border-gray-300 shadow-sm sm:text-sm text-black"
                        />
                    </label>
                    <button className='!inline' type='submit'>  Add  </button>
                </form>

            </div>
        </React.Fragment>
    );
};

export default AddTodo;