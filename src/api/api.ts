import { request } from '../utils/request'

const createParam = (params: object): string => {
  let param = '?'
  for (const [key, value] of Object.entries(params)) {
    param += key
    param += '='
    param += value
  }
  return param
}

export const searchPlayers = (name: string) => {
  return request(
    '/players',
    `?search=${name}`
  )
}


export const getPlayers = (id: number) => {
  return request(
    '/players',
    '/' + String(id)
  )
}

type statsType = {
  'player_ids[]': number
}

export const getStats = (params: statsType) => {
  const param = createParam(params)
  return request(
    '/stats',
    param
  )
}


