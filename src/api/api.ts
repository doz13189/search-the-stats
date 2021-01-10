import { request } from '../utils/request'

type createParamType = (params: object) => string
const createParam: createParamType = (params: object): string => {
  let param = '?'
  for (const [key, value] of Object.entries(params)) {
    param += key
    param += '='
    param += value
    param += '&'
  }
  return param
}

type getAllPlayersParamType = {
  page?: number,
  per_page?: number,
  search?: string
}
type getAllPlayersType = (params: object) => Promise<any>
export const getAllPlayers: getAllPlayersType = (params: getAllPlayersParamType): Promise<any> => {
  const param = createParam(params)
  return request(
    '/players',
    param
  )
}

type getSpecificPlayerParamType = {
  id: number
}
type getSpecificPlayerType = (param: getSpecificPlayerParamType) => Promise<any>
export const getSpecificPlayer: getSpecificPlayerType = (param: getSpecificPlayerParamType): Promise<any> => {
  return request(
    '/players',
    '/' + String(param.id)
  )
}

type getAllTeamsParamType = {
  page: number,
  per_page: number
}
// type getAllTeamsType = (param: getSpecificPlayerParamType) => Promise<any>
export const getAllTeams = (param: getAllTeamsParamType) => console.log('not implement')


type getSpecificTeamsParamType = {
  id: number
}
// type getAllTeamsType = (param: gettSpecificTeamsParamType) => Promise<any>
export const gettSpecificTeamsParam = (param: getSpecificTeamsParamType) => console.log('not implement')

type getAllGamesParamType = {
  page: number,
  per_page: number,
  dates: string,
  seasons: string,
  team_ids: number,
  postseason: boolean,
  start_date: string,
  end_date: string
}
type getAllGamesType = (params: getAllGamesParamType) => Promise<any>
export const getAllGames: getAllGamesType = (params: getAllGamesParamType): Promise<any> => {
  const param = createParam(params)
  return request(
    '/games',
    param
  )
}

type getSpecificGameParamType = {
  id: number
}
type getSpecificGameType = (param: getSpecificGameParamType) => Promise<any>
export const getSpecificGame: getSpecificGameType = (param: getSpecificGameParamType) => {
  return request(
    '/games',
    '/' + String(param.id)
  )
}

type getAllStatsParamType = {
  page?: number,
  per_page?: number,
  dates?: string,
  seasons?: boolean,
  'player_ids[]'?: number,
  game_ids?: number,
  postseason?: boolean,
  start_date?: string,
  end_date?: string
}
type getAllStatsType = (params: getAllStatsParamType) => Promise<any>
export const getAllStats: getAllStatsType = (params: getAllStatsParamType) => {
  const param = createParam(params)
  return request(
    '/stats',
    param
  )
}

type getSeasonAverages = {
  season: number,
  'player_ids[]': string
}
export const getSeasonAverages = (params: getSeasonAverages) => {
  const param = createParam(params)
  return request(
    '/season_averages',
    param
  )
}