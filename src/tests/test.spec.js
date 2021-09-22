import {sum} from '../helpers/helpers';


describe('Math operations', () => {
  it('Should return sum of two positive numbers', () => {
    const a = 1;
    const b = 2;

    expect(sum(a, b)).toEqual(3)
  })

  it('Should return sum of two negative numbers', () => {
    const a = -2;
    const b = -3;

    expect(sum(a, b)).toEqual(-5)
  })

  it('Should return sum of two fractional numbers', () => {
    const a = 2.5;
    const b = -3.5;

    expect(sum(a, b)).toEqual(-1)
  })
})
