'use strict'

import React, { PropTypes } from 'react'

const Search = ({ isDisable, handleSearch }) => (
    <div className='search'>
        <input 
            type='search' 
            placeholder='Digite o nome de usuário no GitHub'
            disabled={isDisable}
            onKeyUp={handleSearch}
        />
    </div>
)

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    isDisable: PropTypes.bool.isRequired
}


export default Search