import httpClient from './cloudFuncHttp'

export default async function weather(refresh = false) {
  const data = await httpClient.getWithCache(
    '/weather',
    {
      cacheKey: 'weather',
      cacheAge: 1800,
    },
    refresh
  )
  return data
}
