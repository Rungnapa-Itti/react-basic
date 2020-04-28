import React from 'react';
import CardPost from './component/CardPost';
import CardPostCC from './component/CardPortCC'
import Profile from './component/Profile'
import './CSS/App.css'
import { renderIntoDocument } from 'react-dom/test-utils';
import Button from 'react-bootstrap/Button'


class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      newItems : "",
      items :[]
    }

  }

  updateInput = (key , value) => {
    this.setState({
      [key]:value
    })

  }

  addItems = () => {
    const newItem = {
      id :10 * Math.random(),
      value : this.state.newItems
    }

    const tmpItems = [...this.state.items]
    tmpItems.push(newItem)
    
    
    this.setState({
      items : tmpItems,
      newItems : ""
    })
    
    console.log(this.state.items)
  }
  delectItem = (itemid) =>{
    const tmpItems = [...this.state.items]
    const newItems = tmpItems.filter(i => i.id !== itemid)
    
    this.setState({
      items : newItems
    })
  }

  
  render(){
    return (
      <div className="App">
        
        <CardPost title="function component" img="./logo192.png"/>
        
        <CardPostCC title="class component"/>
        <h1>Todo list App</h1>

        <input type="text" 
          value = {this.state.newItems}
          onChange={e => this.updateInput("newItems",e.target.value )}
        />
        

        
        <Button onClick={() => this.addItems(this.state.newItems)} variant="secondary">add lists</Button>

        {
          this.state.items.map(item => {
            return (
              <li key={item.id}>
                {item.value} <button onClick = {() => this.delectItem(item.id)}> x</button>
              </li>
            )
          })
        }

        <Profile />
      </div>

      
    );
  }
}

export default App;
