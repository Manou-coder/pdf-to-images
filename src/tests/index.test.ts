import { chunk } from '../index'

describe('chunk', () => {
  test('should chunk array into smaller arrays of a specified size', () => {
    const bigArray = Array.from({ length: 100 }, (v, i) => i)

    const chunkedArray = chunk(bigArray, 25)

    expect(chunkedArray).toHaveLength(4)
  })
  test('should not chunck into multiple arrays if source array is less or equal to chunk size', () => {
    const bigArray = Array.from({ length: 100 }, (v, i) => i)

    const chunkedArray = chunk(bigArray, 100)

    expect(chunkedArray).toHaveLength(1)
  })
})
