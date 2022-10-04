/// <reference types="cypress" />
import React from 'react'
import './App.css'
import * as UniqueSudoku from './solver/UniqueSudoku'
import { starting, solved } from '../cypress/fixtures/sudoku.json'
import { App } from './App'

it.skip('stubs the ES6 import', () => {
  // cannot stub the ES6 import right now
  cy.stub(UniqueSudoku, 'getUniqueSudoku').returns([starting, solved])
  cy.mount(<App />)
  // there should be 3 unfilled cells
  cy.get('.game__cell:not(.game__cell--filled)').should(
    'have.length',
    3,
  )
})
