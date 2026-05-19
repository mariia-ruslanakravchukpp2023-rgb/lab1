import { describe, it, expect, vi } from 'vitest'
import { addMinutes, isMorning, isEvening } from '../../src/utilTime.js'
import * as util from '../../src/utilTime.js'

describe('utilTime tests', () => {

  it('adds minutes correctly', () => {
    expect(addMinutes('10:00', 30)).toBe('10:30')
  })

  it('handles overflow hours', () => {
    expect(addMinutes('23:50', 20)).toBe('00:10')
  })

  it('handles negative minutes', () => {
    expect(addMinutes('10:00', -30)).toBe('09:30')
  })

  it('detects morning', () => {
    expect(isMorning('08:00')).toBe(true)
  })

  it('detects not morning', () => {
    expect(isMorning('15:00')).toBe(false)
  })

  it('detects evening', () => {
    expect(isEvening('20:00')).toBe(true)
  })

  it('uses mock for isMorning', () => {
    const spy = vi.spyOn(util, 'isMorning').mockReturnValue(true)

    expect(util.isMorning('22:00')).toBe(true)

    spy.mockRestore()
  })

})