import { request } from '../utils/request'

const createParam = (params: object): string => {
  let param = '?'
  for (const [key, value] of Object.entries(params)) {
    param += key
    param += '='
    param += value
    param += '&'
  }
  return param
}

export const searchPlayers = (params: object) => {
  const param = createParam(params)
  return request(
    '/players',
    param
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

export const getAllGames = (params: object) => {
  const param = createParam(params)
  return request(
    '/games',
    param
  )
}

export const getSpecificGame = (id: number) => {
  return request(
    '/games',
    '/' + String(id)
  )
}

export const getStats = (params: statsType) => {
  const param = createParam(params)
  return request(
    '/stats',
    param
  )
}

export const getSeasonAverages = (params: object) => {
  const param = createParam(params)
  return request(
    '/season_averages',
    param
  )
}