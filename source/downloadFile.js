import request from 'request-promise'
import getFile from './getFile'
import fs from 'fs'

require('dotenv').config()

const token = process.env.CANVAS_API_TOKEN

const requestObj = url => ({
  'method': 'GET',
  'uri': url,
  'json': true,
  'resolveWithFullResponse': true,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
})

/**
 * Downloads specified fileID from Canvas to specified path
 * @param {Number} fileId the fileId of the file
 * @param {String} path the path that the file should be downloaded to
 * @return {Promise} A Promise that resolves to a log that inidicated what the filename of the downloaded file is. On error, logs the error
 */

const downloadFile = (fileId, path) => getFile(fileId, path)
  .then(({ url, filename }) => {
    const pdfStream = fs.createWriteStream(path + filename)
    request(requestObj(url)).pipe(pdfStream)
    return new Promise((resolve, reject) => {
      pdfStream.on('finish', () => resolve(`${filename}`))
      pdfStream.on('error', err => reject(err))
    })
  })

export default downloadFile
