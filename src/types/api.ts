export type getAllStatsParamType = {
  page?: number,
  per_page?: number,
  dates?: string,
  'seasons[]'?: number,
  'player_ids[]'?: string,
  game_ids?: number,
  postseason?: boolean,
  start_date?: string,
  end_date?: string
}

export type getAllPlayersParamType = {
  search?: string,
  page?: number,
  per_page?: number
}

export type getSpecificPlayerParamType = {
  id: string
}

export type getSeasonAveragesParamType = {
  season: number,
  'player_ids[]': string
}

