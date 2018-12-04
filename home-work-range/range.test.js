const range = require('./range')

test('range test', () => {
  expect(range(2, 6, 2)).toEqual([2, 4, 5, 6])
  expect(range(6)).toEqual([0, 1, 2, 3, 4, 5, 6])
  expect(range(10, 0)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
})

