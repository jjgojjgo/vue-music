// import originJsonp from 'jsonp'
//
// export default function jsonp(url, data, option) {
//   url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
//
//   return new Promise((resolve, reject) => {
//     originJsonp(url, option, (err, data) => {
//       if (!err) {
//         resolve(data)
//       } else {
//         reject(err)
//       }
//     })
//   })
// }
//
// export function param(data) {
//   let url = ''
//   for (var k in data) {
//     let value = data[k] !== undefined ? data[k] : ''
//     url += '&' + k + '=' + encodeURIComponent(value)
//   }
//   return url ? url.substring(1) : ''
// }

import originJsonp from 'jsonp'

export default function jsonp (url, data, opt) {
  url = url.indexOf('?') > -1 ? `${url}${param(data)}` : `${url}?${param(data)}`
  return new Promise((resolve, reject) => {
    originJsonp(url, opt, (err, data) => {
      if (err) {
        reject(data)
      } else {
        resolve(data)
      }
    })
  })
}

function param (data) {
  let params = ''
  for (let key in data) {
    params = `${params}&${key}=${data[key]}`
  }
  return params.substr(1)
}
