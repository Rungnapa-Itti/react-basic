
import React from 'react'
import Btn from './Btn'
import './CardPost.css'


const CardPost = (props) => {
    return(
        <div className="card">
        
            <h2>post title {props.title}</h2>
            <ul>
                <li>post detail 1</li>
                <li>post detail 2</li>
            </ul>
            <Btn />
        </div>
    )
}

export default CardPost