'use strict'

import React from 'react'

const App = () => (
    <div className='app'>
        <div className='search'>
            <input type='search' placeholder='Digite o nome de usuário no GitHub' />
        </div>
        
        <div className='user-info'>
            <img src="https://avatars3.githubusercontent.com/u/29601553?v=4" />
            <h2>
                <a href='https://github.com/lucas2502'>Lucas Gonçalves</a>
            </h2>

            <ul className='repos-info'>
                <li>Repositorio: 122</li>
                <li>Seguidores: 10</li>
                <li>Seguindo: 10</li>
            </ul>

            <div className='action'>
                <button>Ver repositorios</button>
                <button>Ver favoritos</button>
            </div>

            <div className='repos'>
                <h2>Repositorios:</h2>
                <ul>
                    <li><a href="#">Nome do Repositorio</a></li>
                </ul>
            </div>

            <div className='starred'>
                <h2>Favoritos:</h2>
                <ul>
                    <li><a href="#">nome do repositorio</a></li> 
                </ul>
            </div>
        </div>
    </div>
)

export default App