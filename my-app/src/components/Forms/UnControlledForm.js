import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
      this.inputName = React.createRef();
      this.inputCategory = React.createRef();
      this.inputComment = React.createRef();
      }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.inputName.current.value)
        console.log(this.inputCategory.current.value)
        console.log(this.inputComment.current.value)
    }

  render() {
    return (
      <div>
        <h1>Please fill out the form below</h1>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='id-name'>Your Name:</label>
                    <input 
                        ref={this.inputName}
                        id='id-name'    
                        name='name'
                        type="text">
                    </input>
                </div>
                <div>
                    <label htmlFor='id-category'>Query catergory:</label>
                    <select
                        ref={this.inputCategory}
                        id='id-category'
                        name='category'>
                        <option value='website'>Website issue</option>
                        <option value='order'>Order issue</option>
                        <option value='general'>General inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='id-comments'>Comments:</label>
                    <textarea
                        ref={this.inputComment}
                        id='id-comments'
                        name='comments'></textarea>
                </div>
                    <input type="submit" value='submit'></input>
                
            </form>
      </div>
    )
  }
}

export default ControlledForm