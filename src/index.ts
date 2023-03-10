import { createCanvas } from 'canvas'
import fs from 'fs'
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.js'

export const transform = async ({
  pdfPath,
  imagePath,
}: {
  pdfPath: string
  imagePath: string
}) => {
  if (!pdfPath) throw new Error('pdfPath must be provided')
  if (!imagePath) throw new Error('imagePath must be provided')
  const loadingTask = pdfjsLib.getDocument(pdfPath)
  try {
    const pdf = await loadingTask.promise
    console.log('pdf: ', pdf)
    const page = await pdf.getPage(1)
    console.log('page: ', page)
    const scale = 1.5
    const viewport = page.getViewport({ scale })
    console.log('viewport: ', viewport)
    const canvas = createCanvas(viewport.width, viewport.height)
    console.log('canvas: ', canvas)
    const context = canvas.getContext('2d')
    canvas.height = viewport.height
    canvas.width = viewport.width
    page.render({
      canvasContext: context,
      viewport: viewport,
    })
    // VERY IMPORTANT
    // ----------------------------------------------------------------
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // ----------------------------------------------------------------
    console.log('canvas: ', canvas)
    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync(imagePath, buffer)
  } catch (error) {
    console.log('error: ', error)
  }
}
