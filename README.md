# sudoku-app [![CI](https://github.com/bahmutov/the-fuzzy-line/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bahmutov/the-fuzzy-line/actions/workflows/ci.yml) ![cypress version](https://img.shields.io/badge/cypress-12.17.0-brightgreen)

> Example E2E and component Cypress tests for Sudoku game

Original Sudoku game copied from [https://github.com/raravi/sudoku](https://github.com/raravi/sudoku) and you can play it at [https://sudoku-raravi.vercel.app/](https://sudoku-raravi.vercel.app/).

## Presentations

- 💻 slides [Learn Cypress React component testing by playing Sudoku](https://slides.com/bahmutov/sudoku-confoo)

## Test names

To see all E2E test names using [find-cypress-specs](https://github.com/bahmutov/find-cypress-specs) use the script

```
$ npm run test-names:e2e

> the-fuzzy-line@1.0.0 test-names:e2e
> find-cypress-specs --names

cypress/e2e/format-time.cy.js (1 test)
└─ formats the time

cypress/e2e/hint.cy.js (1 test)
└─ fills each empty cell using Hint

cypress/e2e/loads.cy.js (1 test)
└─ empty spec
  └─ passes

cypress/e2e/modes.cy.js (1 test)
└─ changes the number of filled cells

cypress/e2e/play.cy.js (1 test)
└─ Sudoku
  └─ plays the same game

cypress/e2e/timer-clock.cy.js (2 tests, 2 pending)
├⊙ Timer shows 15 minutes
└⊙ Timer shows minutes and seconds since the game started

cypress/e2e/timer.cy.js (1 test)
└─ Timer shows 10 seconds

found 7 specs (8 tests, 2 pending)
```

To see component test names run `test-names:component` script

```
$ npm run test-names:component

> the-fuzzy-line@1.0.0 test-names:component
> find-cypress-specs --component --names

src/App.cy.js (1 test, 1 pending)
└⊙ stubs the ES6 import

src/Game.cy.js (1 test)
└─ plays the game

src/components/Difficulty.cy.js (1 test)
└─ Difficulty
  └─ changes the difficulty level

src/components/FormatTime.cy.js (1 test)
└─ Timer
  └─ formats the time

...

found 9 specs (14 tests, 2 pending)
```

## Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2022

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)
- [videos](https://www.youtube.com/glebbahmutov)
- [presentations](https://slides.com/bahmutov)
- [cypress.tips](https://cypress.tips)
- [Cypress Tips & Tricks Newsletter](https://cypresstips.substack.com/)
- [my Cypress courses](https://cypress.tips/courses)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/the-fuzzy-line/issues) on Github

## MIT License

Copyright (c) 2022 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
