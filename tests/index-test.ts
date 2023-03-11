import { convertPDFtoIMG } from '../src/index'

// describe('convertPDFtoIMG', () => {
//   it('should convert PDF to PNG', () => {
const convert = async () => {
  try {
    await convertPDFtoIMG({
      pdfPath: './tests/sample-test.pdf',
      imagePath: './tests/images/sample-image', // or 'my-image.png'
      scale: 2,
      png: true,
    })
    console.log('Conversion successful!')
  } catch (error) {
    console.error('Error during conversion:', error)
  }
}
convert()
//   })
// })
