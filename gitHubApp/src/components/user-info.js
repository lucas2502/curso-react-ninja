'use strict'

import React from 'react'

const UserInfo = () => (
    <div className='user-info'>
        <img src="https://avatars3.githubusercontent.com/u/29601553?v=4" />
        <h1 className='username'>
            <a href='https://github.com/lucas2502'>Lucas Gonçalves</a>
        </h1>

        <ul className='repos-info'>
            <li>Repositorio: 122</li>
            <li>Seguidores: 10</li>
            <li>Seguindo: 10</li>
        </ul>
    </div>
)

export default UserInfo 

