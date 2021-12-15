
import React from 'react'

export default function Todo(props) {

    const button1 = (
        <div>
            <i className="far fa-trash-alt" onClick={() => props.onDelete(props.id)}></i>
        </div>
    )

    const buttons3 = (
        <div>
            <i className="far fa-edit" onClick={() => props.onEdit(props.id)}></i>          
            <i className="far fa-copy" onClick={() => props.onCopy(props.title)}></i>
            <i className="far fa-trash-alt" onClick={() => props.onDelete(props.id)}></i>
        </div>
        )
    
    
    return (
        <div className='todo'>
         <div className='todo-line'>
             <input className = 'checkbox' 
             type = 'checkbox' 
             id = {props.id} 
             onClick={() => props.onCheck(props.id)} 
             checked = {props.todo.completed}
             />
            <label htmlFor={props.id}>{props.title}</label>
        </div>
        <div className='icons'>
            {props.todo.edited ? button1 : buttons3}
            
        </div>   
        </div>    
    )
}
