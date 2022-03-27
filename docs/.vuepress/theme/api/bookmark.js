import httpClient from './cloudFuncHttp'
import localStorageCache from '@utils/localStorageCache'

export async function getGroup(refresh = false) {
  const data = await httpClient.getWithCache(
    '/bookmark',
    {
      cacheKey: 'bookmark',
      cacheAge: 1800,
      params: {
        action: 'getGroup',
      },
    },
    refresh
  )
  return data
}

export async function deleteById(id) {
  const data = await httpClient.get('/bookmark', {
    params: {
      action: 'delete',
      id,
    },
  })

  localStorageCache.remove('bookmark')

  return data
}

export async function create({ name, url, category }) {
  const data = await httpClient.get('/bookmark', {
    params: {
      action: 'add',
      name,
      url,
      category,
    },
  })
  localStorageCache.remove('bookmark')

  return data
}
