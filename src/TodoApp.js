import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.state = {

            todoList: []
        }
        
      
    }
    handleChange = e => {
        this.setState({
            text: e.target.value
        })
    }
    addItems = () => {
        this.setState({
            todoList: this.state.todoList.concat({name: this.state.text, complete: false}),text:""
        })
    }
    deleteItems = (nom) => {
        this.setState({
            todoList: this.state.todoList.filter(el => nom !==el.name)
        })
    }
    complete = (nom) => {
        this.setState({
            todoList: this.state.todoList.map(el => el.name === nom ? { ...el, complete : !el.complete} : el )
        })
    }
    render() {
        return (
            <div className='todoApp'>
                <div className='todoText'>
                    <h1 className='todoTitle'>
                        To-Do App!
                    </h1>
                    <h5 className='todoAddnew'>
                        Add new To-Do
                    </h5>
                    <div className='todoInputs'>
                        <input text='text' name='text' value={this.state.text} placeholder='Enter a new task' onChange={this.handleChange}/>
                        <Button variant="outline-light" className='addBtn' onClick={this.addItems}>Add</Button>
                    </div>
                </div>

                <div className='todoNewItems'>
                    <h2 className='todoWork'>
                        Let's get some work done!
                    </h2>
                </div>
                <div className='NewItems'>
                    {this.state.todoList.map(el =>
                        <div className='NewItems1'>
                            <div>
                            <Button variant="light" className='completeBtn' onClick={() => this.complete(el.name)}>Complete</Button>
                            <Button variant="light" className='deleteBtn' onClick={() => this.deleteItems(el.name)}>Delete</Button> 
                            </div>
                            <div>
                            <h2 className={el.complete ? 'itemName1' : 'itemName'}>
                                {el.name}
                            </h2>
                            </div>
                        </div>
                        )}

                </div>
                <br />
                <br />
                <hr />
            
            </div>





                    )
                }
            }
export default TodoApp