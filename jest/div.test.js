'use-strict'

import { expect } from 'chai'
import div from './div'

it('div should be a function', () => {
    expect(div).to.be.a('function')
})

it('div(10, 2) shold return 5', () => {
    expect(div(10, 2)).to.be.equal(5)
})