import { createCanvas } from 'canvas'
import fs from 'node:fs'
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.js'

/**
 * Converts a PDF file to an image file (PNG or JPEG).
 * @param pdfPath - The path of the PDF file to convert.
 * @param imagePath - The path to save the converted image file.
 * @param scale - The scaling factor of the image (default: 1.5).
 * @param png - Whether to convert to PNG or JPEG (default: true).
 * @returns `true` if the conversion was successful.
 */
export const convertPDFtoIMG = async ({
  pdfPath,
  imagePath,
  scale = 1.5,
  png = true,
}: {
  pdfPath: string
  imagePath: string
  scale?: number
  png?: boolean
}): Promise<boolean> => {
  if (!pdfPath) throw new Error('pdfPath must be provided')
  if (!imagePath) throw new Error('imagePath must be provided')

  const loadingTask = pdfjsLib.getDocument(pdfPath)
  const pdf = await loadingTask.promise
  const page = await pdf.getPage(1)
  const viewport = page.getViewport({ scale })
  const canvas = createCanvas(viewport.width, viewport.height)
  const context = canvas.getContext('2d')

  canvas.height = viewport.height
  canvas.width = viewport.width

  page.render({
    canvasContext: context,
    viewport,
  })

  // VERY IMPORTANT
  // ----------------------------------------------------------------
  await new Promise((resolve) => setTimeout(resolve, 20))
  // ----------------------------------------------------------------

  let buffer: Buffer
  let newImagePath = ''
  if (png) {
    buffer = canvas.toBuffer('image/png')
    newImagePath = hasExtension(imagePath, '.png')
      ? imagePath
      : imagePath + '.png'
  } else {
    buffer = canvas.toBuffer('image/png')
    newImagePath = hasExtension(imagePath, '.jpeg')
      ? imagePath
      : imagePath + '.jpeg'
  }

  fs.writeFileSync(newImagePath, buffer)
  return true
}

/**
 * Returns `true` if the filename ends with the specified extension.
 * @param filename - The filename to check.
 * @param ext - The extension to check (including the leading period).
 * @returns `true` if the filename ends with the extension.
 */
function hasExtension(filename: string, ext: string): boolean {
  return filename.endsWith(ext)
}
