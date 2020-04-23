
import React from 'react'
import Btn from './Btn'


const CardPost = (props) => {
    return(
        <div>
        
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