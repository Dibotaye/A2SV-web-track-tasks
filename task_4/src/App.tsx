import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState<string[]>([])
  const [newTodo, setNewTodo] = useState('')
  const [editingTodo, setEditingTodo] = useState<string | null>(null)
  const [editValue, setEditValue] = useState('')

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo])
      setNewTodo('')
    }
  }

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  const startEditing = (index: number, todo: string) => {
    setEditingTodo(index.toString())
    setEditValue(todo)
  }

  const saveEdit = (index: number) => {
    if (editValue.trim()) {
      const newTodos = [...todos]
      newTodos[index] = editValue
      setTodos(newTodos)
      setEditingTodo(null)
      setEditValue('')
    }
  }

  const cancelEdit = () => {
    setEditingTodo(null)
    setEditValue('')
  }

  return (
    <div className="app-container">
      <h1>My To-Do List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div
            key={index}
            className={`todo-item ${editingTodo === index.toString() ? 'editing' : ''}`}
          >
            {editingTodo === index.toString() ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  autoFocus
                />
                <button onClick={() => saveEdit(index)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </div>
            ) : (
              <>
                <span>{todo}</span>
                <div className="todo-actions">
                  <button onClick={() => startEditing(index, todo)}>Edit</button>
                  <button onClick={() => deleteTodo(index)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
