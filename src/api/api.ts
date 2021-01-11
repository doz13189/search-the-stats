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


type apiFunctionType = (params: any) => Promise<any>

export const getAllPlayers: apiFunctionType = (params: object): Promise<any> => {
  const param = createParam(params)
  return request(
    '/players',
    param
  )
}


export const getSpecificPlayer: apiFunctionType = (param: any): Promise<any> => {
  return request(
    '/players',
    '/' + String(param.id)
  )
}

// type getAllTeamsParamType = {
//   page: number,
//   per_page: number
// }
// type getAllTeamsType = (param: getSpecificPlayerParamType) => Promise<any>
// export const getAllTeams = (param: getAllTeamsParamType) => console.log('not implement')


// type getSpecificTeamsParamType = {
//   id: number
// }
// type getAllTeamsType = (param: gettSpecificTeamsParamType) => Promise<any>
// export const gettSpecificTeamsParam = (param: object) => console.log('not implement')

// type getAllGamesParamType = {
//   page: number,
//   per_page: number,
//   dates: string,
//   seasons: string,
//   team_ids: number,
//   postseason: boolean,
//   start_date: string,
//   end_date: string
// }

// export const getAllGames: apiFunctionType = (params: object): Promise<any> => {
//   const param = createParam(params)
//   return request(
//     '/games',
//     param
//   )
// }

// type getSpecificGameParamType = {
//   id: number
// }
// export const getSpecificGame: apiFunctionType = (param: object) => {
//   return request(
//     '/games',
//     '/' + String(param.id)
//   )
// }


export const getAllStats: apiFunctionType = (params: object) => {
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