'use strict'


import React, { Component } from 'react'

class Timer extends Component {
    constructor () {
        super()
        this.state = {
            time: 0
        }
    }

    componentWillReceiveProps (nextProps) {
        console.log('componentWillReceiveProps', this.props, nextProps)
    }

    shouldComponentUpdate (nextProps, nextState){
        console.log('shouldComponentUpdate', this.props, nextProps)
        return true;
    }
    
    componentDidUpdate (prevProps, prevState) {
        console.log('componentDiUpdate:', this.props, prevProps);
    }
    
    componentDidMount () {
        this.timer = setInterval(() => {
            this.setState({ 
                time: this.state.time + 1 
            })
        }, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.timer)
    }
    render () {
        return  <div>TImer: { this.state.time }</div>
    }
}


export default Timer