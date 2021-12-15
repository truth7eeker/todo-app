import React from 'react'

export default function TodosCompleted(props) {
    return (
        <div className='todo'>
         <div className='todo-line completed'>
             <input className='checkbox' 
             type='checkbox' 
             id={props.id} 
             checked={props.todo.completed} 
             onClick={() => props.onCheck(props.id)}
             />
            <label htmlFor={props.id}>{props.title}</label>
        </div>
        <div className='icons'>
            <i className="far fa-trash-alt" onClick={() => props.onDeleteCompleted(props.id)}></i>    
        </div>   
        </div>  
    )
}
