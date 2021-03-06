interface TeamIF {
  [key: number]: string;
}

export const team : TeamIF =  {
  1 : "Atlanta Hawks",
  2 : "Boston Celtics",
  3 : "Brooklyn Nets",
  4 : "Charlotte Hornets",
  5 : "Chicago Bulls",
  6 : "Cleveland Cavaliers",
  7 : "Dallas Mavericks",
  8 : "Denver Nuggets",
  9 : "Detroit Pistons",
  10 : "Golden State Warriors",
  11 : "Houston Rockets",
  12 : "Indiana Pacers",
  13 : "LA Clippers",
  14 : "Los Angeles Lakers",
  15 : "Memphis Grizzlies",
  16 : "Miami Heat",
  17 : "Milwaukee Bucks",
  18 : "Minnesota Timberwolves",
  19 : "New Orleans Pelicans",
  20 : "New York Knicks",
  21 : "Oklahoma City Thunder",
  22 : "Orlando Magic",
  23 : "Philadelphia 76ers",
  24 : "Phoenix Suns",
  25 : "Portland Trail Blazers",
  26 : "Sacramento Kings",
  27 : "San Antonio Spurs",
  28 : "Toronto Raptors",
  29 : "Utah Jazz",
  30 : "Washington Wizards"
} as const

// export type TeamType = keyof typeof team;
// export type TeamType = typeof team[keyof typeof team];

// export enum Team {
//   "Atlanta Hawks" = 1,
//   "Boston Celtics" = 2,
//   "Brooklyn Nets" = 3,
//   "Charlotte Hornets" = 4,
//   "Chicago Bulls" = 5,
//   "Cleveland Cavaliers" = 6,
//   "Dallas Mavericks" = 7,
//   "Denver Nuggets" = 8,
//   "Detroit Pistons" = 9,
//   "Golden State Warriors" = 10,
//   "Houston Rockets" = 11,
//   "Indiana Pacers" = 12,
//   "LA Clippers" = 13,
//   "Los Angeles Lakers" = 14,
//   "Memphis Grizzlies" = 15,
//   "Miami Heat" = 16,
//   "Milwaukee Bucks" = 17,
//   "Minnesota Timberwolves" = 18,
//   "New Orleans Pelicans" = 19,
//   "New York Knicks" = 20,
//   "Oklahoma City Thunder" = 21,
//   "Orlando Magic" = 22,
//   "Philadelphia 76ers" = 23,
//   "Phoenix Suns" = 24,
//   "Portland Trail Blazers" = 25,
//   "Sacramento Kings" = 26,
//   "San Antonio Spurs" = 27,
//   "Toronto Raptors" = 28,
//   "Utah Jazz" = 29,
//   "Washington Wizards" = 30,
// }


