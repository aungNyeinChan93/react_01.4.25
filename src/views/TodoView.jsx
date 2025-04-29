import React, { useState } from 'react';
import List from '../components/base/List';
import Item from '../components/Item';
import AddTodo from '../components/AddTodo';
import { Todos } from '../database/db'

const Todo = () => {
    const [todos, setTodo] = useState(Todos);

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
                        return <Item {...todo} remove={remove} key={todo.id} />
                    })
                }
            </List>
        </React.Fragment>
    );
};

export default Todo;