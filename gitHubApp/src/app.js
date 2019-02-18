'use strict'

import React, { Component } from 'react'

import AppContent from './components/app-content';

class App extends Component {
    constructor () {
        super()
        this.state = {
            userinfo: {
                username: 'Lucas Gonçalves',
                photo: 'https://avatars3.githubusercontent.com/u/29601553?v=4',
                login: 'https://github.com/lucas2502',
                repos: 12,
                followers: 10,
                following: 12
            },
            repos: [{
                name: 'Repo',
                link: '#'
            }],
            starred: [{
                name: 'Repo',
                link: '#'
            }]
        }
    }
    render(){
        return (
            <AppContent 
                userinfo={this.state.userinfo}
                repos={this.state.repos}
                starred={this.state.starred}
            />
        )
    } 
}

export default App