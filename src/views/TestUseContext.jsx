import React, { useContext, useRef } from 'react';
import { CustomerContext } from '../contexts/CustomerProvider';
import { AppContext } from '../contexts/AppProvider';

const TestContext = () => {
    const { customerState, customerDispatch } = useContext(CustomerContext);
    const { name, global, setGlobal, changeName } = useContext(AppContext);

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
                <button onClick={() => setGlobal((global) => ({ ...global, name: 'change' }))} className='text-3xl p-2 text-red-500'> {customerState.mess} || {name} || {global.app} </button>
                <button style={{ marginTop: '10px' }} onClick={() => changeName(customerRef.current.value)} className='text-3xl p-2 text-red-500'>  {global.name} </button>
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
            <section className='users flex justify-center items-center my-4'>
                <ul>
                    {
                        global.users.map(user => {
                            return <li key={user.id}>{user.email}</li>
                        })
                    }
                </ul>
            </section>
        </React.Fragment >
    );
};

export default TestContext;