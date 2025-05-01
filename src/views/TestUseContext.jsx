import React, { useContext, useRef } from 'react';
import { CustomerContext } from '../contexts/CustomerProvider';

const TestContext = () => {
    const { customerState, customerDispatch } = useContext(CustomerContext);
    const customerRef = useRef();
    const ageRef = useRef();

    const addCustomer = (e) => {
        e.preventDefault();
        const newCustomer = {
            id: Math.random().toString(),
            name: customerRef.current.value,
            age: ageRef.current.value
        };
        customerDispatch({ type: 'create', payload: newCustomer })
        customerRef.current.value = "";
        console.log(newCustomer);


    }
    return (
        <React.Fragment>
            <section className='w-full h-screen flex flex-col justify-center items-center bg-green-300'>
                <h3 className='text-3xl p-2 text-red-500'> {customerState.mess} </h3>
                <div>
                    <form onSubmit={addCustomer}>
                        <div className='grid grid-cols-1 gap-3 px-4 py-6 border border-amber-400 rounded-lg bg-green-500'>
                            <input type="text" name="name" id="name" className='p-2 border border-red-500 rounded w-[400px] !text-black' placeholder='Enter Customer...'
                                ref={customerRef}
                            />
                            <input type="number" name="age" id="age" className='p-2 border border-red-500 rounded w-[400px] !text-black' placeholder='Enter age...'
                                ref={ageRef}
                            />
                            <button type='submit' className='!text-black !bg-blue-600'>Submit</button>
                        </div>
                    </form>
                </div>
                <div>
                    <ul>
                        {
                            customerState.customers.map(c => {
                                return <li key={c.id}>{c.name}</li>
                            })
                        }
                    </ul>
                </div>
            </section>
        </React.Fragment>
    );
};

export default TestContext;