import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getLeaders } from "../../api/requests"

export type LeaderStats = {
    pointLeaders: any[],
    reboundLeaders: any[],
    blockLeaders: any[],
    stealLeaders: any[],
    assistLeaders: any[],
}

const initialState: LeaderStats = {
    pointLeaders: [],
    reboundLeaders: [],
    blockLeaders: [],
    stealLeaders: [],
    assistLeaders: []
}

const leagueLeaders = createSlice({
    name: 'leagueLeaders',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(leagueLeadersAll.pending, (state) => {
                console.log('Pending data from league leaders');
            })
            .addCase(leagueLeadersAll.fulfilled, (state, action: any) => {
                console.log('data recieved');
                console.log(action.payload);
                
                const { 
                    pointLeaders,
                    reboundLeaders,
                    blockLeaders,
                    stealLeaders,
                    assistLeaders
                } = action.payload

                state.pointLeaders = pointLeaders
                state.reboundLeaders = reboundLeaders
                state.blockLeaders = blockLeaders
                state.stealLeaders = stealLeaders
                state.assistLeaders = assistLeaders
            })
            .addCase(leagueLeadersAll.rejected, (state, action: any) => {
                console.log(action.payload);
                
            })
            
    },
})

export const leagueLeadersAll = createAsyncThunk(
    "leagueLeaders/points",
    async () => {
        const categories = {
            PTS: 'pointLeaders',
            BLK: 'blockLeaders',
            REB: 'reboundLeaders',
            STL: 'stealLeaders',
            AST: 'assistLeaders'
        }

        let data = {}

        for (const [key, value] of Object.entries(categories)) {
            Object.assign(data, { [value]: await getLeaders(key) })
        }

        return data
    }
)

export default leagueLeaders.reducer;