import jsonp from '../common/js/jsonp.js'
import {commonParams, optSingerDetail} from './config.js'

export function getSingerDetail (singermid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = {
    ...commonParams,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1,
    g_tk: 1664029744,
    singermid: singermid
  }
  return jsonp(url, data, optSingerDetail)
}
