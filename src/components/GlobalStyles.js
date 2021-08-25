import { createGlobalStyle } from "styled-components";



const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }


    html{
        &::-webkit-scrollbar{
            width:0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
    }

    body{
        font-family:'Montserrat', sans-serif;
        width:100%;
    }

    h2{
        font-size:3rem;
        font-family: 'Charmonman',sans-serif;
    }


    h3{
        font-size:1.3rem;
        padding:1.3rem;
    }

    p{
        font-size:1.2rem;
        line-height: 200%;
    }
    a{
        text-decoration: none;
    }

`


export default GlobalStyles