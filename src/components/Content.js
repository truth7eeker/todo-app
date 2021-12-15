import React from 'react'
import Todo from '../components/Todo'
import Sidebar from './Sidebar'
import TodosCompleted from './TodosCompleted'


export default function Content(props) {

    // dislay incomplete todos

    const incompleteTodos = props.todos.filter(todo => !todo.completed)

    const todoElements = incompleteTodos.map((todo, index) => 
        <Todo title = {todo.title ? todo.title : null}
              key = {index + "incomplete"}
              id = {todo.id}
              todo = {todo}  
              onDelete = {props.handleDelete}
              onCopy = {props.handleCopy}
              onEdit = {props.handleEdit}
              onCheck = {props.handleCheckbox}
              editTodo = {props.editTodo}
        />  
    )

  
    // display completed todos

    const completedTodoElements = props.completed.map((todo, index) => 
        <TodosCompleted 
            title = {todo.title ? todo.title : null}
            key = {index + 'complete'}
            id = {todo.id}  
            todo = {todo} 
            onCheck = {props.handleCheckbox}
            onDeleteCompleted = {props.handleDeleteCompleted}
        />
    )
    
    const total = incompleteTodos.length + completedTodoElements.length
   
    return (
        <main>
            <Sidebar />
           <div className='todos-list'>
               <div className='input-area' >
                    <input placeholder='+ Add a task, press Enter to save'
                            className='add-todo'
                            onChange = {props.handleChange}
                            value = {props.editTodo.title ? props.editTodo.title 
                                : props.newTodo.title === 'Add your first todo!' ? '' : props.newTodo.title}
                            name='title'  
                    />
                    <button className='add-button' onClick={props.handleAdd}>
                        {props.editTodo.title ? 'Save' : 'Add'}
                    </button> 
               </div>

               <h6 className='total-todos'>Total: {total}</h6>
               <div className='todos'>
                    <h4>To do ({incompleteTodos.length})</h4>
                    {todoElements}   
                </div>
           </div>
           <div className='completed-todos'>
               <h4>Completed ({completedTodoElements.length})</h4>
               {completedTodoElements}
             
           </div>
        </main>
    )
}
