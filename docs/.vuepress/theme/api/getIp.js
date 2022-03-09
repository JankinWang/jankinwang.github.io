import axios from 'axios'
const apiUrl =
  'https://8baf1136-b2e3-4a81-afc2-bc969b7560a5.bspapp.com/getClientIP'

export default async function getIp() {
  let {
    data: { ip },
  } = await axios.get(apiUrl)
  return ip
}
