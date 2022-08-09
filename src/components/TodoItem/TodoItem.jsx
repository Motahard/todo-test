import React, { Component } from 'react'

import { connect } from 'react-redux'

import { REMOVE_TODO, EDIT_TODO } from '../../redux/actions'

import './todo-item.css'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onEdit: false,
            editText: this.props.todo.text
        }
    }

    deleteTodo = () => {
        this.props.dispatch({
            type: REMOVE_TODO,
            payload: this.props.todo.id
        })
    }

    toggleEdit = () => {
        this.setState(prevState => {
            return {
                onEdit: !prevState.onEdit,
                editText: this.props.todo.text
            }
        })
    }

    updateTodo = () => {
        const updatedTodo = {
            id: this.props.todo.id,
            text: this.state.editText
        }
        this.props.dispatch({
            type: EDIT_TODO,
            payload: updatedTodo
        })
        this.setState({
            onEdit: false
        })
    }   

    handleChange = e => {
        this.setState({
            editText: e.target.value
        })
    }

    render() {
        const { todo } = this.props;
        
        return (
        <>
            { this.state.onEdit ? 
                (
                    <div className='edit-todo'>
                        <input 
                            type="text" 
                            value={this.state.editText}
                            onChange={this.handleChange}
                        />
                        <div className='todo-container-buttons'>
                            <button className='todo-button' onClick={this.updateTodo}>
                                Update
                            </button>
                            <button className='todo-button bg-red' onClick={this.toggleEdit}>
                                Cancel Edditing
                            </button>
                        </div>
                    </div>
                    
                ) :
                (
                    <div className='display-todo'>
                        <p>{ todo.text }</p>
                        <div className='todo-container-buttons'>
                            <button className='todo-button' onClick={this.toggleEdit}>Edit</button>
                            <button className='todo-button bg-red' onClick={this.deleteTodo}>Delete</button>
                        </div>
                    </div>
                )
            }
        </>
        )
    }
}

export default connect()(TodoItem);