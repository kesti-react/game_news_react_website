import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../features/gamesReducer";
import { useEffect } from "react";

/* styles  */
import styled from "styled-components";
import { motion } from 'framer-motion'



/* Components */
import Game from '../components/Game'


const Home = () => {
    const dispatch = useDispatch()


    //retrieve the game data from the redux store
    //Use destructuring 
    const { popular, newGames, upcoming } = useSelector(state => state.games)
 

    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch])
    return (
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map((game) => (
                    <Game name = {game.name}
                    released = {game.released}
                    id = {game.id}
                    image = {game.background_image}
                    key = {game.id}/>
                ))}

            </Games>
            
            <h2>Popular Games</h2>
            <Games>
                {popular.map((game) => (
                    <Game name = {game.name}
                    released = {game.released}
                    id = {game.id}
                    image = {game.background_image}
                    key = {game.id}/>
                ))}

            </Games>

            <h2>New Released Games</h2>
            <Games>
                {newGames.map((game) => (
                    <Game name = {game.name}
                    released = {game.released}
                    id = {game.id}
                    image = {game.background_image}
                    key = {game.id}/>
                ))}

            </Games>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding:5rem 0rem;
    }
`


const Games = styled(motion.div)`
    min-height:80vh;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(500px,1fr));
    grid-row-gap:5rem;
    grid-column-gap:3rem;

`

export default Home;
