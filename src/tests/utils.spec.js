import {trimString} from '../helpers/helpers'

describe('trimString util', () => {
  it('Positive trimming cases ',() => {
    expect(trimString('LongName', 5)).toEqual('LongN');
    expect(trimString('LongName', 4)).toEqual('Long');
    expect(trimString('LongName', 10)).toEqual('LongName');
    expect(trimString('   LongName   ', 10)).toEqual('   LongName   ');
  });
  it('Negative trimming cases ',() => {
    expect(trimString('     ', 4)).toBe('     ');
    expect(trimString(null, 4)).toBeNull();
    expect(trimString(undefined, 4)).toBeUndefined()
  });
})

// describe('getIsValidNumber util', () => {
//   it('Positive checking cases  ',() => {
//     const numbers = [1, 0, 0.5]
//     for (let i = 1; i < numbers.length; i++) {
//       expect(getIsValidNumber(numbers[i]).toBeTruthy())
//     }
//   });
//   it('Negative checking cases  ',() => {
//     const notNumbers = ['123asd', 'qwe', Infinity, undefined, null, [], {}]
//     for (let i = 1; i < notNumbers.length; i++) {
//       expect(getIsValidNumber(notNumbers[i]).toBeFalsy())
//     }
//   });
// })
// describe('deleteObjProp util', () => {
//   it('Positive removing cases  ',() => {});
//   it('Negative removing cases  ',() => {});
// })
