import React from 'react'
import logo from '../pics/logo.svg'
import userPic from '../pics/user.svg'
import arrow from '../pics/arrow.svg'

export default function Nav() {
    return (
        <nav className='nav'>
                <div className='nav--logo'>
                    <figure>
                    <img src={logo} />
                    <figcaption>To-Do</figcaption>
                    </figure>
                    <h3>Tasks</h3>
                </div>
                <div className='nav--user-info'>
                    <p>Leanne Graham</p>
                    <img src={userPic} />
                    <img src={arrow}/>
                </div>
        </nav>
    )
}
