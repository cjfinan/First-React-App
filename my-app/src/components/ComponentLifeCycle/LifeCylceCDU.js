import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCylceCDUChild'

export class LifeCylceCDU extends Component {
    constructor(props) {
      console.log('update greeting')
      super(props)
    
      this.state = {
         greeting: 'Hello!'
      }
    }
    updateGreeting = () => {
        console.log('update greeting called')
        this.setState(prevState => {
            return{
            greeting: prevState.greeting === 'Hello!' ? 'Goodbye': 'Hello!'
            }
        })
    }
    componentDidUpdate(){
        console.log('component did update')
    }
  render() {
    console.log('render method called')
    return (
      <div>
        <h1>
            {this.state.greeting}
        </h1>
        <button onClick={this.updateGreeting}>Update Greeting</button>
        <LifeCyclesCDUChild parentGreeting={this.state.greeting}/>
      </div>
    )
  }
}

export default LifeCylceCDU