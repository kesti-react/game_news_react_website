import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

import {  gameDetailsURL, gameScreenshotsURL } from '../api';



/* Get details of the game
- https://api.rawg.io/api/games/{id} */



export const loadGameDetails = createAsyncThunk( 
    'games/getGamesDetails',
    async(id) => {
        let detailData = await axios.get(gameDetailsURL(id))
        let gameScreenshots = await axios.get(gameScreenshotsURL(id))

        detailData = detailData.data
        gameScreenshots = gameScreenshots.data

        return {detailData,gameScreenshots}
    }
)

const initState = {
    game:{platforms:[]},
    screenshots:[],
    status:null

};

const gameDetailsSlice = createSlice({
    name: 'gamesDetails',
    initialState: initState,
    reducers: {
       
    },
    extraReducers: {
        
        [loadGameDetails.pending]: (state, action) => {
            state.status = 'loading'

        },
        [loadGameDetails.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.game = action.payload.detailData
            state.screenshots = action.payload.gameScreenshots.results
            


        },
        [loadGameDetails.rejected]: (state, action) => {
            state.status = 'failed'
        }


    }
})



export const selectGameDetails = (state) => state.gameDetails

// console.log(typeof selectGameDetails);

//Export Reducer

export default gameDetailsSlice.reducer;