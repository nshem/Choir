import React, { Component } from 'react'
import Note from './Note.js'

class Board extends Component {
    render() {
        return (
            <React.Fragment>
                <Note />
            </React.Fragment>
        )
    }
}

export default Board;