# @m-coder/pdftoimage

Convert PDF files 📄 to images 📷 without requiring any software like ImageMagick 🔄.

## Install

```sh
npm install @m-coder/pdftoimage
```

## Example

```js
const { convertPDFtoIMG } = require('@m-coder/pdftoimage')

const convert = async () => {
  try {
    await convertPDFtoIMG({
      pdfPath: 'my-pdf.pdf',
      imagePath: 'my-image', // or 'my-image.png'
      // scale: 2, optional - default value 1.5 (the larger the scale, the better the rendering quality.)
      // png: true, optional - default value true (if false will convert to Jpeg)
    })
    console.log('Conversion successful!')
  } catch (error) {
    console.error('Error during conversion:', error)
  }
}

convert()
```
