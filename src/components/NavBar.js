import styled from "styled-components"
import { motion } from 'framer-motion'
import { logDOM } from "@testing-library/react"



const NavBar = () => {
    return (
        
         <StyledNav>
            <Logo>
                <img src="https://rawg.io/assets/en/favicon-32x32.png?v=4" alt="logo" />
                <h1>Rawg.io</h1>
            </Logo>


         </StyledNav>




     );
}


const StyledNav = styled (motion.nav)`
    padding:3rem 5rem;
    text-align:center;


`


const Logo = styled(motion.div)`
    display:flex;
    justify-content: center;
    


`
 
export default NavBar;