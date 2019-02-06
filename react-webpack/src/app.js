'use strict'

import React, { Component } from 'react'
import Button from './button' 
import Square from  './square'
import Timer from './timer'

class App extends Component{
    constructor () {
        console.log('constructor')
        super()
        this.state = {
            time: 0,
            showTimer : true
        }
        this.timer
    }

    componentWillReceiveProps (nextProps) {
        console.log('componentWillReceiveProps', this.props, nextProps)
    }

    componentWillMount () {
        console.log('componentWillMount')
    }
    componentDidMount () {
        console.log('componentDidMount')
    }

    render(){
        console.log('render')
        return (
            <div>
                <Timer  time={this.state.time} />
                <button onClick={() => {
                    this.setState({ time: this.state.time + 10 })
                }}>Change props</button>
            </div>
        )
    }
}

export default App