import axios from 'axios'
import localStorageCache from '../utils/localStorageCache.js'
import ipLocation from './ipLocation'
const apiurl = 'https://36c7edd4-5acd-4e1c-a193-672f11a3d9f9.bspapp.com/xinguan'

/**
 * 获取完整的新冠数据
 *
 * @export
 * @return {Promise}
 */
export async function getDataFull() {
  // 读取缓存
  let cacheData = localStorageCache.get('xinguan')
  if (cacheData) {
    // 缓存有效
    return cacheData
  }

  // 缓存失效，请求新数据
  const {
    data: { data },
    status,
  } = await axios(apiurl)
  if (status === 200) {
    localStorageCache.set('xinguan', data, 600)
    return data
  }
}

// 中国全国数据
export async function getChina() {
  const { chinaTotal, lastUpdateTime } = await getDataFull()
  return Object.assign({ lastUpdateTime }, chinaTotal)
}

// 中国地区数据
export async function getChinaArea() {
  const { areaTree } = await getDataFull()
  const { province, city } = await ipLocation()
  const chinaData = areaTree[2]

  let realData = searchAreaRealData([province, city], chinaData)

  return Object.assign({ province, city }, realData)
}

// 递归查询地区数据
function searchAreaRealData(areaNames, areaData) {
  if (areaData?.children?.length <= 0 || areaNames?.length <= 0) {
    return areaData
  }

  const areaName = areaNames.shift()
  for (let child of areaData.children) {
    let regp = new RegExp(`^${child.name}`)
    if (regp.test(areaName)) {
      return searchAreaRealData(areaNames, child)
    }
  }
}
