import React, { createContext, useReducer } from 'react';

export const CustomerContext = createContext();

const CustomerProvider = ({ children }) => {

    const initialValue = {
        mess: 'customers state',
        customers: [
            { name: 'customer-1', id: 1, age: 32 },
            { name: 'customer-2', id: 2, age: 33 },
        ]
    };

    const reducer = (state, action) => {
        if (action.type === 'create') {
            return { ...state, customers: [...state.customers, action.payload] }
        }
    }

    const [customerState, customerDispatch] = useReducer(reducer, initialValue)

    return (
        <CustomerContext.Provider value={{ customerState, customerDispatch }}>
            {children}
        </CustomerContext.Provider>
    );
};

export default CustomerProvider;