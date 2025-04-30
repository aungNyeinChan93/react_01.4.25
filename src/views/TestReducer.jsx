import React, { useReducer } from 'react';


const TestReducer = () => {
    const initialState = {
        count: 0,
        message: 'this is reducer counter app'
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, acton) {
        console.log({ ...state, add: 'something' });

        if (acton.type === 'increment') {
            return { ...state, count: state.count + 1 }
        };
        if (acton.type === 'decrement') {
            return { ...state, count: state.count - 1 }
        }
        if (acton.type === 'mess') {
            return alert(state.message);
        }
    }

    const [users, userDispatch] = useReducer(userReducer, {
        users: [
            { name: 'mgmg', age: 21 },
            { name: 'susu', age: 39 },
        ]
    })
    function userReducer(state, action) {
        if (action.type === 'add') {
            return { ...state, users: [...state.users, action.payload] }
        };
        if (action.type === 'remove') {
            return { ...state, users: state.users.filter(user => user.name !== action.payload.name) }
        }
    }

    return (
        <React.Fragment>
            <div className='text-center bg-gray-200 w-full h-screen'>
                <h2 className='text-3xl text-green-400'>{state.count}</h2>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <button onClick={() => dispatch({ type: 'mess' })}>alert</button>
                <button onClick={() => userDispatch({ type: 'add', payload: { name: 'koko', age: 44 } })}>Add User</button>
                <button onClick={() => userDispatch({ type: 'remove', payload: { name: 'koko', age: 44 } })}>Remove User</button>
                <div className='mt-5 grid grid-cols-4 gap-4'>
                    {
                        users.users.map(user => {
                            return <li key={user.age}> {user.name}</li>
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default TestReducer;