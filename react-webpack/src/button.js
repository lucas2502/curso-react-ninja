'use strict'

import React from 'react'

const Button = ({children, handleClick}) => (
    <button classname='main-button' onCLick={handleClick}>
    {children}
    </button>
)


export default Button