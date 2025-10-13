import { useState, useEffect } from 'react'
import './App.css'

interface ITodo {
 completed: boolean
 id: number
 title: string
 userId: number
}

function App() {
  const [todos, setTodos]= useState<ITodo[]>([])
  const [newTodo, setNewtodo] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchTodo = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      const slicedData = data.slice(0,10)
      setTodos(slicedData)
    }catch{
      console.log('err')
      setError(true)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTodo()
  }, [])

  const addTodo = async () => {
    const request = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
  body: JSON.stringify({
    title: newTodo,
    completed: false,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
    })
    const req = await request.json()
    console.log(req)
    setTodos(prev => [req, ...prev])
  }

  const toggleTodo = async (id:number, completed: boolean) => {
    const request = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PATCH',
  body: JSON.stringify({
    completed: !completed,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
    })
    const req = await request.json()
    const itemChanged = todos.find(todo => todo.id === id)

    itemChanged.completed = !completed
    
    
  }

  if(loading) {
    return <p>Loading...</p>
  }

  if(error) {
    return <p>Error!</p>
  }

  return (
    <>
      <div>
        <div className='flex'><input type="text" value={newTodo} className='border border-white' onChange={(e) => setNewtodo(e.target.value)}/>
        <button onClick={addTodo}>Add</button></div>
        
        {todos.map(todo => (
          <div key={todo.id} className='flex'>
            <button onClick={() =>toggleTodo(todo.id, todo.completed)}>{todo.completed ? "✅" : "⬜️"}</button>
            <p className={`ml-4 ${todo.completed && 'line-through'}`}>{todo.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
