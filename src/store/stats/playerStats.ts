import { createSlice } from "@reduxjs/toolkit";

type PlayerStats = {
    points: number,
    rebounds: number,
    steals: number,
    blocks: number,
    turnovers: number,
}

const initialState: PlayerStats = {
    points: 0,
    rebounds: 0,
    steals: 0,
    blocks: 0,
    turnovers: 0,
}

const playerData = createSlice({
    name: 'playerData',
    initialState,
    reducers: {
        getPlayerData: (state) => {
            state.blocks = 8;
            state.points = 29;
            state.rebounds = 1;
            state.steals = 0;
            state.turnovers = 9;
        }
    }
})

export const { getPlayerData } = playerData.actions;

export default playerData.reducer;