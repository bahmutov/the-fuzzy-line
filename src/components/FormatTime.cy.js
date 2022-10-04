import { formatTime } from './Timer'

describe('Timer', () => {
  it('formats the time', () => {
    expect(formatTime({})).to.equal('00:00')
    expect(formatTime({ seconds: 3 })).to.equal('00:03')
    expect(
      formatTime({ minutes: 55, seconds: 3 }),
    ).to.equal('55:03')
    expect(
      formatTime({ hours: 110, minutes: 55, seconds: 3 }),
    ).to.equal('110:55:03')
  })
})
