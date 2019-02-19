'use strict'

import React, { PropTypes } from 'react'


const Actions = ({ getRepos, getStarred }) => (
    <div className='action'>
        <button onClick={getRepos}>Ver repositorios</button>
        <button onClick={getStarred}>Ver favoritos</button>
    </div>

)
Actions.propTypes = {
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}
export default Actions