import React, {useState} from 'react';
import css from './App.css'
import Nav from './components/Nav'
import Content from './components/Content'

function App() {

  const [newTodo, setNewTodo] = useState({
    userId: 1,
    id: 1,
    title: "",
    completed: false,
    edited: false
  })

  const [todos, setTodos] = useState([])

  const [editTodo, setEditTodo] = useState({
    userId: 1,
    id: null,
    title: "",
    completed: false,
    edited: false
  })

  const [completed, setCompleted] = useState([])

  const handleDelete = (id) => {
    const newTodos = [...todos];
    const filtered = newTodos.filter(todo => id !== todo.id)
    setTodos(filtered)
  }


  const handleDeleteCompleted = (id) => {
    const newTodos = [...completed];
    const filtered = newTodos.filter(todo => id !== todo.id)
    setCompleted(filtered)
  }

  const handleCopy = (title) => {
    const input = document.createElement('input');
    input.setAttribute('value', title);
    document.body.appendChild(input);
    input.select();
    const result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;

  }

  const handleEdit = (id) => {
    const newTodos = [...todos]
    const filtered = newTodos.filter(todo => id === todo.id)
    filtered[0].edited = true
    setEditTodo(filtered[0])
  }


  const handleAdd = () => {
    const newTodos = [...todos]
    const edited = newTodos.map(todo => {
      if (todo.id === editTodo.id) {
        todo.title = editTodo.title
        // todo.edited = !editTodo.edited
      }
      return todo
    })
    
    const reg = /^\s*$/gm
    const total = [...todos, newTodo]

    editTodo.title ? 
    setTodos(edited) :
    
    !newTodo.title.match(reg) &&
    setTodos(total)

    setNewTodo(prev => ({
      ...prev,
      title: ''
    }))
    setEditTodo(prev => ({
      ...prev,
      title: ''
    }))
    
  
  }

  const handleChange = (e) => {
    editTodo.title ? 
    setEditTodo(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    : setNewTodo(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
      id: todos.length + 1
    }))
  }

  const handleCheckbox = (id) => {
    const newTodos = [...todos]
    const unfiltered = newTodos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
   
    const filtered = unfiltered.filter(todo => todo.completed === true)
    setCompleted(filtered)
    console.log(filtered)
  }



  return (
    <div className="App">
      <Nav />
      <Content todos={todos} 
      handleDelete = {handleDelete} 
      handleCopy = {handleCopy} 
      handleEdit = {handleEdit} 
      handleAdd = {handleAdd}
      handleChange = {handleChange}
      editTodo = {editTodo}
      newTodo = {newTodo}
      handleCheckbox = {handleCheckbox}
      completed = {completed}
      handleDeleteCompleted = {handleDeleteCompleted}
      />
    </div>
  );
}

export default App;
