# pdf-to-img

Convert PDF files 📄 to images 📷 without requiring any software like ImageMagick 🔄.

## Install

```sh
npm install pdf-to-img
```

## Example

```js
const { convertPDFtoIMG } = require('pdf-to-img')

const convert = async () => {
  try {
    await convertPDFtoIMG({
      pdfPath: 'my-pdf.pdf',
      imagePath: 'my-image', // or 'my-image.png'
      // scale: 2, optional - default value 1.5
      // png: true, optional - default value true (if false will convert to Jpeg)
    })
    console.log('Conversion successful!')
  } catch (error) {
    console.error('Error during conversion:', error)
  }
}

convert()
```

The `pdf` function accepts either a path to the file on disk, or a data URL (e.g. `data:application/pdf;base64,...`)

### Options

You can supply a second argument which is an object of options:

```js
const doc = await pdf('example.pdf', {
  password: '...', // if the PDF is encrypted

  scale: 2.0, // use this for PDFs with high resolution images if the generated image is low quality
})
```
