import React, { Component } from 'react'
import Todo from './Todo.js'

class Note extends Component {
    render() {
        return (
            <div className='note'>
                <h2>Note header</h2>
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
            </div>
        )
    }
}

export default Note
