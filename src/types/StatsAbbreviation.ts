interface StatsAbbreviationIF {
  [key: string]: string;
}

export const statsAbbreviation : StatsAbbreviationIF =  {
  'GP' : 'Games Played',
  'Min' : 'Minutes Per Game',
  'pts' : 'Points',
  'fgm' : 'Field Goals Made',
  'fga' : 'Field Goals Attempted',
  'fg%' : 'Field Goals Percentage',
  'fg3m' : 'Three-Point Field Foals',
  'fg3a' : 'Three-Point Field Foals',
  'fg3%' : 'Three-Point Field Goals',
  'ftm' : 'Free Throws Made',
  'fta' : 'Average Free Throws Att',
  'ft%' : 'Free Throws Percentage',
  'oreb' : 'Offensive Rebounds',
  'dreb' : 'Defensive Rebounds',
  'reb' : 'Rebounds',
  'ast' : 'Assists',
  'blk' : 'Blocks',
  'stl' : 'Steals',
  'pf' : 'Personal Fouls',
  'to' : 'Turnover'
} as const


