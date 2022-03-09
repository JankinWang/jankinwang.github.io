import { getGist, getRaw } from './gistApi'

export async function getFileContent(filename) {
  const {
    data: { files },
  } = await getGist()

  const file = files[filename]

  let content
  if (file.truncated) {
    content = await getRaw(file.raw_url)
  } else {
    content = JSON.parse(file.content)
  }

  return content
}
