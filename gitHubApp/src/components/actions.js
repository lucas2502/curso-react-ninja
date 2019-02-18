'use strict'

import React from 'react'


const Actions = ({getRepos, getStarres}) => (
    <div className='action'>
        <button onClick={getRepos}>Ver repositorios</button>
        <button onClick={getStarres}>Ver favoritos</button>
    </div>

)

export default Actions