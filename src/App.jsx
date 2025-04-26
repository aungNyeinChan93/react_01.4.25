import { useState } from 'react'
import './App.css'
import Alert from './components/Alert'
import CardList from './views/CardListView'
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
      <CardList />
    </>
  )
}

export default App
