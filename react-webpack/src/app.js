'use strict'

import React, { Component } from 'react'

class App extends Component{
    constructor () {
        super()
        this.state = {
            checked: false
        }
    }
    render(){
        return (
            <input
                type='checkbox'
                checked={this.state.checked}
                onChange={()=>{ this.setState({checked: !this.state.checked})}}
            />
        )
    }
}

export default App