'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({userinfo, repos, starred, handleSearch }) => (
    <div className='app'>
        <Search handleSearch={handleSearch} />
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Actions />}
        {!!repos.lenght && 
            <Repos 
                className='repos' 
                title='Repositorios' 
                repos={repos}
            />}
        {!!starred.lenght && 
            <Repos 
                className='starred' 
                title='Favoritos' 
                repos={repos}
            />}
    </div>
)

AppContent.protoType = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired 
}
export default AppContent