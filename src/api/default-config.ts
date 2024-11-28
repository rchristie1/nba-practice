import * as types from '../types/request-type'

// Get Year
const currentYear = new Date().getFullYear();

// current Season
const currentSeason = `${currentYear - 1}-${currentYear.toString().substring(2)}`;

// API
export const API = 'http://stats.nba.com/stats';
export const API2 = 'http://localhost:3001';
export const APIGlobal = 'https://ca.global.nba.com/'
export const HeadShots = 'https://nba-players.herokuapp.com/players';
export const HeadShotsNBA = 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190';
export const ActionShots = 'https://ak-static.cms.nba.com/wp-content/uploads/silos/nba/latest/440x700'; // 202691.png playerid.png
export const TeamLogo = 'https://ca.global.nba.com/media/img/teams/00/logos'; //LAL_logo.svg'
export const APIArticles = 'http://api.nba.net/0/league/collection/47b76848-028b-4536-9c9c-37379d209639';

export const LeagueLeadersAPI = 'https://ca.global.nba.com/stats2/league/dailyplayerleader.json?locale=en&statType='; //points, rebounds, assists, blocks, steals
export const LeagueAveragesAPI = 'https://ca.global.nba.com/stats2/league/teamstats.json?locale=en';
export const comparePlayerLeague = 'https://ca.global.nba.com/stats2/player/stats.json?ds=profile&locale=en&playerCode='; //firstname_lastname;

export const playerAwards = 'https://ca.global.nba.com/feeds/awards/player/'; //playerID.json'

//#region PLayers
export const playergamelog: types.PlayerGameLog = {
  PlayerID: '1610612761',
  Season: currentSeason,
  SeasonType: 'Regular Season',
};
export const playercareerstats : types.PlayerCareerStats = {
  PerMode: 'Totals',
  PlayerID: '',
};

export const commonallplayers: types.CommonAllPlayers = {
  LeagueID: '00',
  Season: currentSeason,
  IsOnlyCurrentSeason: '0',
};

export const commonplayerinfo: types.CommonPlayerInfo = {
  PlayerID: '',
};
//#endregion

//#region Teams
export const commonteamroster: types.CommonTeamRoster = {
  Season: currentSeason,
  TeamID: '1610612761',
};

export const teaminfocommon: types.TeamInfoCommon = {
  TeamID: '1610612761',
  Season: currentSeason,
  SeasonType: 'Regular Season',
  LeagueID: '00',
};
export const teamgamelog: types.TeamGameLog = {
  TeamID: '1610612761',
  Season: currentSeason,
  SeasonType: 'Regular Season',
};

//#endregion

//#region Other
export const leagueleaders: types.LeagueLeaders = {
  LeagueID: '00',
  PerMode: 'PerGame',
  Season: currentSeason,
  SeasonType: 'Regular Season',
  Scope: 'RS',
  StatCategory: '',
};

export const playerprofile: types.PlayerProfile = {
  LeagueID: '',
  PlayerID: '',
  Season: '',
  SeasonType: '',
  GraphStartSeason: '',
  GraphEndSeason: '',
  GraphStat: '',
};

export const videoStatus: types.VideoStatus = {
  LeagueID: '',
  GameDate: '',
};

export const boxscoreadvancedv2: types.BoxScoreAdvancedV2 = {
  GameID: '',
  StartPeriod: '',
  EndPeriod: '',
  StartRange: '',
  EndRange: '',
  RangeType: '',
};

export const boxscoresummaryv2: types.BoxScoreSummaryV2 = {
  GameID: '',
};
//#endregion
