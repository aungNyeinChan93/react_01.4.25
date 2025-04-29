import React, { useRef, useState } from 'react';
import exampleUseState from '../Tests/useState_test';


const Counter = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('aung nyein chan');
    const [user, setUser] = useState({
        name: 'aung',
        age: 21,
    })
    const addDegit = () => {
        setCount((count) => count += 100000);
    }

    return (
        <React.Fragment>
            <section className='w-full h-100vh'>
                <h1 className='text-center p-2 text-red-600 !text-2xl'>Counter App</h1>
                <div className='container mx-auto text-center px-2 py-2'>
                    <h3>{count}</h3>
                    <div className=' flex justify-center space-x-2 mt-2 items-center '>
                        <button onClick={() => setCount((count) => count + 1)}>+</button>
                        <button onClick={() => setCount((count) => count - 1)}>-</button>
                        <button onClick={() => setCount((count) => count = 0)}>reset</button>
                        <button onClick={() => setCount((count) => count += 100)}>000</button>
                        <button onClick={() => setCount((count) => count += 1000)}>0000</button>
                        <button onClick={addDegit}>00000</button>
                    </div>
                </div>
            </section>
            <h1 className='text-center' onMouseOver={() => setUser((user) => user = { name: 'koko', age: 12 })}>{user.name}
                <p>{user.age}</p>
            </h1>

            <div className="container mx-auto text-center">
                <h2 onMouseOver={() => setName((name) => name = 'anc')}> {name}</h2>
            </div>
        </React.Fragment>
    );
};

export default Counter;