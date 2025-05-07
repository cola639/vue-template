import request from '@/utils/request'

export function getYearData(data) {
  return request({
    url: '/unity/yearsdata/list',
    method: 'post',
    data
  })
}

export function getList() {
  return request({
    url: '/unity/reservation/listxcx',
    method: 'post'
  })
}

export function getMsg() {
  return request({
    url: '/unity/reservation/detailed/23',
    method: 'post'
  })
}

export function getDateMsg() {
  return request({
    url: '/unity/reservation/periodList/23/2023-06-30',
    method: 'post'
  })
}
