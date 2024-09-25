import styled from "styled-components";

export const HeaderCab = styled.header`
    width: 100%;
    min-height: 10vh;
    background-color: tomato;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items:center ;

    img{
        width: 80px;

    }

    h1,p{
        color: white;
        padding-bottom: 10px;
    }


`

export const FooterRod = styled.footer`
    min-height: 5dvh;
    padding: 20px;
    background-color: darkred;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        color: white;
        text-align: center;
    }
`