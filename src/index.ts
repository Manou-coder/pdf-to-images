// Chunk an array into smaller arrays of a specified size
export const chunk = (arr: Array<any>, size: number) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )
}

const array = ['1', 2, 3, 'manou']
console.log('array: ', array)

const chunkArray = chunk(array, 3)
console.log('chunk: ', chunkArray)
