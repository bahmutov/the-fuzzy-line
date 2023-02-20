/// <reference types="cypress" />
import React from 'react'
import { Overlay } from './Overlay'
import '../App.css'

describe('Overlay', () => {
  it('is invisible', () => {
    // mount the overlay
    // confirm it is visible
  })

  it('is visible and clickable', () => {
    // mount the overlay with click prop stub
    // click on the overlay
    // confirm the click stub was called
  })

  it('shows the loading element', () => {
    // intercept calls to /times/N endpoint
    // and return an empty list / 404
    // after delay by 1 second
    // mount the Overlay component and pass time prop
    // with N seconds
    // the overlay should show "Loading" message
    // and then the message should go away
  })
})
