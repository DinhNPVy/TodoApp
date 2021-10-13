import React, {useState} from 'react'
import { DataContext } from './DataProvider'

export default function  Navbar(){

    return (
        <div className="navbar">
           <ul>
                <li> <a href="">Home</a></li>
                <li> <a href="/about">About</a></li>
                <li> <a href="/post">Post</a></li>
            </ul>
        </div>
    )
}
