import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

import {  gameDetailsURL } from '../api';



/* Get details of the game
- https://api.rawg.io/api/games/{id} */



export const loadGameDetails = createAsyncThunk( 
    'games/getGamesDetails',
    async(id) => {
        const detailData = await axios.get(gameDetailsURL(id))
        
        return detailData.data
    }
)

const initState = {
    game:{}

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
            state.game = action.payload


        },
        [loadGameDetails.rejected]: (state, action) => {
            state.status = 'failed'
        }


    }
})



//Export Reducer

export default gameDetailsSlice.reducer;