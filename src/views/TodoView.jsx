import React, { useState } from 'react';
import List from '../components/base/List';
import Item from '../components/Item';
import AddTodo from '../components/AddTodo';

const Todo = () => {
    const [todos, setTodo] = useState([
        { id: 1, task: 'task 1', status: false },
        { id: 2, task: 'task 2', status: true },
        { id: 3, task: 'task 3', status: true },
        { id: 4, task: 'task 4', status: false },
    ]);

    const remove = (id) => {
        setTodo(todos.filter(todo => todo.id !== id))
    }

    const addTodo = (todo) => {
        setTodo([...todos, todo]);
    }

    return (
        <React.Fragment>
            <h1 className='text-center !text-3xl'>Todo Lists</h1>
            <AddTodo addTodo={addTodo} />
            <List>
                {
                    todos.map(todo => {
                        return <Item {...todo} remove={remove} />
                    })
                }
            </List>
        </React.Fragment>
    );
};

export default Todo;