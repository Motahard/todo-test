import React, { Component } from 'react'

import { connect } from 'react-redux';

import { ADD_TODO } from '../../redux/actions'

import './add-todo.css'

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoValue: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.todoValue) return;

        const todo = {
            text: this.state.todoValue,
            id: Date.now()
        }

        this.props.dispatch({
            type: ADD_TODO,
            payload: todo
        })

        this.setState({
            todoValue: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            todoValue: e.target.value
        })
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input 
                    className='todo'
                    type="text" 
                    placeholder='Enter a new todo...' 
                    value={this.state.todoValue}
                    onChange={this.handleChange}
                />
            </form>
        </div>
        )
    }
}

export default connect()(AddTodo);