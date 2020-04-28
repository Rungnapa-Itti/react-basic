
import React , {useState} from 'react'
import Btn from './Btn'
import '../CSS/CardPost.css'

const CardPost = (props) => {

    const [number,setNumber] = useState(0)

    

    return(
        <div className="card">
        
            <h2>post title {props.title}</h2>
            <img src={props.img} style={{width: "100px" , height: "100px"}}></img>
            <ul>
                <li>post detail 1</li>
                <li>post detail 2</li>
            </ul>
            <Btn />
            <button onClick = {() => setNumber(number+1)}>count => useState {number}</button>
           
        </div>
    )
}

export default CardPost