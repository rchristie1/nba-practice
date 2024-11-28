export type PlayerGameLog = {
    PlayerID: string,
    Season: string,
    SeasonType: string,
}

export type PlayerCareerStats = {
    PerMode: string,
    PlayerID: string,
}

export type CommonAllPlayers = {
    LeagueID: string,
    Season: string,
    IsOnlyCurrentSeason: string,
}
export type CommonPlayerInfo = {
    PlayerID: string,
}

export type CommonTeamRoster = {
    Season: string,
    TeamID: string,
}

export type TeamInfoCommon = {
    TeamID: string,
    Season: string,
    SeasonType: string,
    LeagueID: string,
}
export type TeamGameLog = {
    TeamID: string,
    Season: string,
    SeasonType: string,
}

export type LeagueLeaders = {
    LeagueID: string,
    PerMode: string,
    Season: string,
    SeasonType: string,
    Scope: string,
    StatCategory: string,
}

export type PlayerProfile = {
    LeagueID: string,
    PlayerID: string,
    Season: string,
    SeasonType: string,
    GraphStartSeason: string,
    GraphEndSeason: string,
    GraphStat: string,
}

export type VideoStatus = {
    LeagueID: string,
    GameDate: string,
};

export type BoxScoreAdvancedV2 = {
    GameID: string,
    StartPeriod: string,
    EndPeriod: string,
    StartRange: string,
    EndRange: string,
    RangeType: string,
  };
  
  export type BoxScoreSummaryV2 = {
    GameID: string,
  };