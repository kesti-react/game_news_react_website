import styled from "styled-components";
import { motion } from 'framer-motion'

import { useDispatch } from "react-redux";
import { loadGameDetails } from "../features/gameDetailsSlice";

const Game = ({ name, released, image, id }) => {
    const dispatch = useDispatch()
    

    const loadDetailsHandler = () => {
        dispatch(loadGameDetails(id))
    }


    return (
        <StyledGame onClick = {loadDetailsHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
        </StyledGame>
    );
}

/* 
 object-fit: cover   (The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit)


*/

const StyledGame = styled(motion.div)`
    min-height:30vh;
    box-shadow:0px 5px 30px rgba(0,0,0,0.1);
    text-align:center;
    border-radius:8px;
    img{
        width:100%;
        height:40vh;
        object-fit: cover;
    }
`


export default Game;