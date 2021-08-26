import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

import { popularGamesURL, newGamesURL, upcomingGamesURL } from '../api';


/* Reducer have some special rules
- Must not do any asynchronous logic or other "side effects"
- Not allow to modify the existing state. Instead, they must make immutable updates, by copying the 
existing state and making changes to the copied values. 
- Calculate the new state based on the state and action arguments */

export const loadGames = createAsyncThunk(
    'games/getGames',
    async () => {
        let popularData = await axios.get(popularGamesURL())
        let newGamesData = await axios.get(newGamesURL())
        let upComingData = await axios.get(upcomingGamesURL())

        
        popularData = popularData.data
        newGamesData = newGamesData.data
        upComingData = upComingData.data

        return { popularData, newGamesData, upComingData }

    }
)


//Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    status: null

};



const gamesSlice = createSlice({
    name: 'games',
    initialState: initState,
    reducers: {
        fetchGames: (state, action) => {
            // state.popular = action.payload
        }
    },
    extraReducers: {
        [loadGames.pending]: (state, action) => {
            state.status = 'loading'
        },
        [loadGames.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.popular = action.payload.popularData.results
            state.newGames = action.payload.newGamesData.results
            state.upcoming = action.payload.upComingData.results


        },
        [loadGames.rejected]: (state, action) => {
            state.status = 'failed'
        }


    }
})





export const { fetchGames } = gamesSlice.actions;



//Export Reducer

export default gamesSlice.reducer;