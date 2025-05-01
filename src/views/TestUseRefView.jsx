import React, { useRef, useState } from 'react';

const TestUseRef = () => {
    let staticValue = 'this is non-reactive value';
    let [dynamicValue, setDynamicValue] = useState('reactive value');
    const [result, setResult] = useState('')

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const nameRef = useRef();
    const emailRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(e.target);
        staticValue = 'update';
        dynamicValue !== 'update!'
            ? setDynamicValue(dynamicValue => dynamicValue = 'update!')
            : setDynamicValue((dynamicValue) => dynamicValue = 'reactive value!')
        console.log(name, email);
    }

    const submitHandlerTwo = (e) => {
        e.preventDefault();
        console.log(nameRef);
        console.log(nameRef.current.formAction);
        console.log(nameRef.current.value, emailRef.current.value);
        setResult(preResult => preResult = `name: ${nameRef.current.value} | email: ${emailRef.current.value}`)
    }

    return (
        <React.Fragment>
            <section className='w-full h-screen bg-green-400 flex justify-center items-center'>
                <div>
                    <h4>{staticValue}</h4>
                    <h4>{dynamicValue}</h4>
                    <div className='flex space-x-6'>
                        <div className='form-one'>
                            <form onSubmit={submitHandler}>
                                <div className='grid grid-cols-1 gap-3 px-4 py-6 border border-amber-400 rounded-lg bg-green-500'>
                                    <h3 className='text-2xl text-blue-600 text-center py-3'>UseState</h3>
                                    <input type="text" name="name" id="name" className='p-2 border border-red-500 rounded w-[400px] !text-black' placeholder='Enter Name...'
                                        value={name} onChange={(e) => setName(e.target.value)}
                                    />
                                    <input type="email" name="email" id="email" className='p-2 border border-red-500 rounded w-[400px] !text-black' placeholder='Enter Email...'
                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button type='submit' className='!text-black !bg-blue-600'>Submit</button>
                                </div>
                            </form>
                            <div>
                                <h3>Result</h3>
                                {name}|{email}
                            </div>
                        </div>

                        <div className='form-two'>
                            <form onSubmit={submitHandlerTwo}>
                                <div className='grid grid-cols-1 gap-3 px-4 py-6 border border-amber-400 rounded-lg bg-green-500'>
                                    <h3 className='text-2xl text-blue-600 text-center py-3'>UseRef</h3>
                                    <input ref={nameRef} type="text" className='p-2 border border-red-500 rounded w-[400px] !text-black' placeholder='Enter Name...'

                                    />
                                    <input ref={emailRef} type="email" className='p-2 border border-red-500 rounded w-[400px] !text-black' placeholder='Enter Email...'

                                    />
                                    <button type='submit' className='!text-black !bg-blue-600'>Submit</button>
                                </div>
                            </form>
                            <div>
                                <h3>{result}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default TestUseRef;