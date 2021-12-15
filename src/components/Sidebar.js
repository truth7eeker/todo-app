import React from 'react'
import tasks from '../pics/tasks.svg'

export default function Sidebar() {
    return (
        <div className='sidebar'>  
            <div className='sidebar--tasks'>
                <img src={tasks} /> 
            </div>
        </div>    
    )
}
