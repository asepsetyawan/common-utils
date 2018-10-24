import { isEmail } from './isEmail'

describe('ExampleComponent', () => {
  it('is truthy', () => {
    expect(isEmail('asepsetyawan9@gmail.com')).toBe(true)
  })
})
