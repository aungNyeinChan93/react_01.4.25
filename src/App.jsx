import './App.css'
import { useState } from 'react'
import Alert from './components/Alert'
import CardList from './views/CardListView'
import ProductList from './views/ProductView'
import UserList from './views/UserListView'
import Todo from './views/TodoView'


function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count * 10)}>
          count is {count}
        </button>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <Alert />
        <Alert />
        <Alert />
      </div>
      <CardList age={21} message='CardList' />
      <ProductList />
      <UserList />
      <Todo />
    </>
  )
}

export default App
