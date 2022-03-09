import axios from 'axios'
const GIST_ID = '6e14c4110f35b52c65163b26711a967d'
const GIST_TOKEN = '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'

const ajax = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 2000,
  headers: {
    Authorization: `token ${GIST_TOKEN}`,
    accept: 'application/vnd.github.v3+json',
  },
})

export function getGist() {
  return ajax.get(`/gists/${GIST_ID}`, {
    data: {
      gist_id: GIST_ID,
    },
  })
}

export async function getRaw(url) {
  let res = await fetch(url)

  let commits = []
  if (res.ok) {
    commits = await res.json()
  }

  return commits
}
