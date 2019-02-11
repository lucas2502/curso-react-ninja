'use strict'

import React from 'react'

const Button = ({children, handleClick}) => (
    <button onCLick={handleClick}>
    {children}
    </button>
)

Button.propTypes = {
    handleClick: React.PropTypes.func.isRequired
}

export default Button