import jsonp from '../common/js/jsonp.js'
import {commonParams, opt} from './config.js'

export default function () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = {
    ...commonParams,
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  }
  return jsonp(url, data, opt)
}
