/// <reference types="cypress" />
import React from 'react'
import { Numbers } from './Numbers'
import '../App.css'

describe('Numbers', () => {
  it('shows numbers', () => {
    // mount the numbers component
    // confirm there are 9 numbers shown
  })

  it('calls on click number', () => {
    // mount the number component
    // and pass the click prop stub
    // click on the component
    // and confirm the stub was called
  })

  it('shows the selected number', () => {
    // pass the selected number via context provider
    // around the mounted numbers component
    // confirm the selected number has
    // the right CSS class
  })
})
