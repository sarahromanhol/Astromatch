import styled from "styled-components";

export const AppContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    background: linear-gradient(90deg, rgb(131, 58, 180) 0%, rgb(253, 29, 29) 50%, rgb(252, 176, 69) 100%);
    margin: 0;
    padding: 10px;
`

export const ButtonLimpar = styled.button`
    align-self: center;
    justify-self: center;
    width: 200px;
    height: 70px;
    background-color:#7892c2;
    border-radius:28px;
    border:1px solid #4e6096;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size:17px;
    padding:16px 31px;
    text-decoration:none;
    text-shadow:0px 1px 0px #283966;

&:hover {
    background-color:#476e9e;
}

&:active {
    position:relative;
    top:1px;
}
`

export const MainCardContainer = styled.span`
    grid-column-start: 2;
`

export default { AppContainer, ButtonLimpar, MainCardContainer }
