import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem';

import './todo-list.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { todos } = this.props;
        
        return (
        <div className='todo-list'>
            { todos.map(item => (
                <TodoItem todo={item} key={item.id}/>
            )) }
        </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state
})

export default connect(mapStateToProps)(TodoList);