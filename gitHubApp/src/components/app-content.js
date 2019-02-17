'use strict'

import React from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const AppContent = () => (
    <div className='app'>
        <Search />
        <UserInfo />
        <Actions />
        <Repos className='repos' title='Repositorios' repos={[{
            name: 'Nome Repositorio',
            link: '#'
        }]}/>
        <Repos className='starred' title='Favoritos' repos={[{
            name: 'Favoritos',
            link: '#'
        }]}/>
    </div>
)

export default AppContent