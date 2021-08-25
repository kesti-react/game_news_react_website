import  {configureStore} from '@reduxjs/toolkit'
import gamesReducer from '../features/gamesReducer'
import gameDetailsReducer from '../features/gameDetailsSlice'




export default configureStore({
    reducer:{
        games: gamesReducer,
        gameDetails:gameDetailsReducer
    }
})