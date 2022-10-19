import React, { Component } from 'react'
import './App.css'
import ListItem from './components/ListItem'

class MyList extends Component {
  render() {
    let toDoItems = this.props.theList.map((item,index) => {
      return <ListItem task = {item} key={index} />
    })
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {toDoItems}
        </ul>
      </div>
    )
  }
}

export default MyList