import React from 'react'
import { Timer } from './Timer'
import '../App.css'
import { SudokuContext } from '../context/SudokuContext'
import moment from 'moment'

describe('Timer', () => {
  it('sets the clock to the given value', () => {
    const timeGameStarted = moment().subtract(
      900,
      'seconds',
    )

    cy.mount(
      <SudokuContext.Provider value={{ timeGameStarted }}>
        <section className="status">
          <Timer />
        </section>
      </SudokuContext.Provider>,
    )
    cy.contains('15:00')
  })
})
