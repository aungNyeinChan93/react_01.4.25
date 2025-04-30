import './App.css'
import { useState } from 'react'
import Alert from './components/Alert'
import CardList from './views/CardListView'
import ProductList from './views/ProductView'
import UserList from './views/UserListView'
import Todo from './views/TodoView'
import Test, { users } from './database/test'
import Counter from './views/CounterView'
import UseEffectTest from './views/useEffectTestView'
import SwitchBtn from './components/SwitchBtn'
import TestReducer from './views/TestReducer'
import Categories from './views/CategoriesView'

function App() {
  return (
    <>
      <SwitchBtn />
      {/* {Test.array}
      {users[0].name} */}
      <div className='grid grid-cols-3 gap-4'>
        <Alert />
        <Alert />
        <Alert />
      </div>
      <CardList age={21} message='CardList' />
      <ProductList />
      <UserList />
      <Todo />
      <Counter />
      <UseEffectTest />
      <TestReducer />
      <Categories />
    </>
  )
}

export default App
