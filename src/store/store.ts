import { configureStore } from "@reduxjs/toolkit";
import playerStats from "./stats/playerStats"
import leagueLeaders from "./stats/leagueLeaders"
// import teamStats from "./stats/teamStats"

export const store = configureStore({
    reducer: {
        playerStats,
        leagueLeaders
        // teamStats
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store