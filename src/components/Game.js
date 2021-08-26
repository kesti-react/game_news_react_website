import styled from "styled-components";
import { motion } from 'framer-motion'

import { useDispatch } from "react-redux";
import { loadGameDetails } from "../features/gameDetailsSlice";


import { Link } from "react-router-dom"
import { smallImage } from "../api";

const Game = ({ name, released, image, id }) => {
    const stringPathId = id.toString()
    const dispatch = useDispatch()


    const loadDetailsHandler = () => {
        document.body.style.overflow = 'hidden'
        dispatch(loadGameDetails(id))
    }


    return (
        <StyledGame layoutId={stringPathId} onClick={loadDetailsHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img  layoutId ={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name} />
            </Link>

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
    overflow: hidden;
    img{
        width:100%;
        height:40vh;
        object-fit: cover;
    }
`


export default Game;