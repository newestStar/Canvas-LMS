import request from 'request-promise'
import linkparser from 'parse-link-header'
import Bottleneck from 'bottleneck'

require('dotenv').config()

const token = process.env.CANVAS_API_TOKEN

const limiter = new Bottleneck({
  maxConcurrent: 20,
  minTime: 100
})

const requestObj = url => ({
  'method': 'GET',
  'uri': url,
  'json': true,
  'resolveWithFullResponse': true,
  'headers': {
    'Authorization': 'Bearer ' + token
  }
})

const fetchAll = (url, result = []) =>
  request(requestObj(url))
    .then(response => {
      result = [...result, ...response.body]
      const links = linkparser(response.headers.link)
      return links.next ? fetchAll(links.next.url, result) : result
    }).catch(err => console.log(err))

const fetchAllRateLimited = limiter(fetchAll)

export default fetchAllRateLimited
