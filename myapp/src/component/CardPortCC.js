import React , {Component} from 'react'

class CardPortCC extends Component{
    constructor(props){
        super(props)

        this.state = {
            count : 0,
            color : "red"
        }

    }

    countFunc = () => {
        this.setState({
            count : this.state.count + 1
        })
        
    }

    render(){
        return (
            <div>
            <h2 style ={{backgroundColor:"red"}}> post title {this.props.title}</h2>
            <ul>
                <li>post detail 1</li>
                <li>post detail 2</li>
            </ul>
            <button onClick = {this.countFunc}>
                count!
            </button>
            <p>How many on click ? ->{this.state.count}</p>
            
        </div>
        )
    }

}
export default CardPortCC

