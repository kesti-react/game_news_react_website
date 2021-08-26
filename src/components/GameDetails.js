import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectGameDetails } from "../features/gameDetailsSlice";
import { useHistory } from "react-router-dom";
import { smallImage } from "../api";


/* import the image from img folder */


import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg' 
import gamepad from '../img/gamepad.svg'


import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'



const GameDetails = ({ pathId }) => {

    const history = useHistory();

    /* click outside to exit the detail popup */
    const exitDetailHandler = (e) => {
        const element = e.target

        if (element.classList.contains('game-details-card')) {
            document.body.style.overflow = 'auto'
            history.push('/')
        }
    }

    const detail = useSelector(selectGameDetails)
    const fetchingStatus = useSelector(state => state.gameDetails.status)



    const getPlatform = (platform) => {
        if (platform === "PlayStation 4"){
            return playstation
        }else if (platform === "Nintendo Switch"){
            return nintendo
        }else if (platform === "Xbox One"){
            return xbox
        }
        else if (platform === "PC"){
            return steam
        }
        else if (platform === "IOS"){
            return apple
        }else{
            return gamepad
        }
    }


    const renderStars = () => {
        const stars = [];
        const rating = Math.floor(detail.game.rating);
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            stars.push(<img alt="star" key={i} src={starFull}></img>);
          } else {
            stars.push(<img alt="star" key={i} src={starEmpty}></img>);
          }
        }
        return stars;
      };
    

    return (
        <>
            {fetchingStatus === "succeeded" && (
                <CardShadow onClick={exitDetailHandler} className="game-details-card">
                    <Detail layoutId={pathId}>
                        <Stats>
                            <div className="rating">
                                <motion.h3 layoutId={`title ${pathId}`}>{detail.game.name}</motion.h3>
                                <p>Rating:{detail.game.rating}</p>
                                {renderStars()}
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {detail.game.platforms.map((data) => (
                                        <img 
                                        src={getPlatform(data.platform.name)} 
                                        key={data.platform.id}/>

                                    ))}
                                </Platforms>
                            </Info>

                        </Stats>
                        <Media>
                            <motion.img
                                layoutId={`image ${pathId}`}
                                src={smallImage(detail.game.background_image, 640)}
                                alt={detail.game.background_image} />
                        </Media>
                        <Description>

                            <p dangerouslySetInnerHTML={{ __html: detail.game.description }}></p>
                        </Description>
                        <Gallery>
                            {detail.screenshots.map(screenshot => (
                                <img
                                    src={smallImage(screenshot.image, 640)}
                                    key={screenshot.id}
                                    alt={screenshot.image}
                                />
                            ))}
                        </Gallery>
                    </Detail>
                </CardShadow>)}
        </>
    );
}


const CardShadow = styled(motion.div)`
    z-index:3;
    width:100%;
    min-height:100vh;
    overflow-y: scroll;
    background:rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    left:0;
    &::-webkit-scrollbar{
        width:0.5rem
    }
    &::-webkit-scrollbar-thumb{
        background-color:#ff7676;
    }
    &::-webkit-scrollbar-track{
        background:white
    }


`

const Detail = styled(motion.div)`
    padding:2rem 5rem;
    width:70%;
    background:#fff;
    color:#000;
    position:absolute;
    left:15%;
    img{
        width:100%;
    }

`


const Stats = styled(motion.div)`
    display:flex;
    align-items: center;
    justify-content:space-between;
    img{
        width:2rem;
        height:2rem;
        display: inline;
    }
`


const Info = styled(motion.div)`
    text-align: center;
    
`



const Platforms = styled(motion.div)`
    display:flex;
    justify-content: space-evenly;
    img{
        margin-left:3rem
    }
`

const Media = styled(motion.div)`
    margin-top:3rem;
    img{
        width:100%;
        height:60vh;
        object-fit: cover;
    }
`


const Description = styled(motion.div)`
    margin:5rem 0rem;


`


const Gallery = styled(motion.div)`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

`
export default GameDetails;