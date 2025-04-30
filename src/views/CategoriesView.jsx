import React, { useReducer, useRef } from 'react';

const Categories = () => {
    const categoryRef = useRef();

    let initialState = {
        categories: [],
    }
    const [state, categoryDispatch] = useReducer(categoryReducer, initialState);
    function categoryReducer(state, action) {
        if (action.type === 'add_category') {
            return { ...state, categories: [...state.categories, action.payload] }
        }
    }
    const formHandeler = (e) => {
        e.preventDefault();
        const newCategory = {
            id: Math.random.toString(),
            name: categoryRef.current.value
        }
        categoryDispatch({ type: 'add_category', payload: newCategory });
        categoryRef.current.value = ''
    };
    return (
        <React.Fragment>
            <section className='w-full h-screen mx-10 '>
                <div>
                    <form onSubmit={formHandeler}>
                        <input ref={categoryRef} type="text" placeholder='add category' />
                        <input type="submit" value="Add" />
                    </form>
                </div>
                <ul>
                    {state.categories.map(category => {
                        return <li key={category.id}>{category.name}</li>
                    })}
                </ul>

            </section>
        </React.Fragment>
    );
};

export default Categories;