import styled from "styled-components";

export const CardContainer = styled.div`
    border: solid black 1px;
    height: 590px;
    width: 400px;
    /* text-align: center; */
    background-color: black;
    border-radius: 10px;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    align-items: center;
    height: 50px;
`

export const Logo = styled.img`
    width: 180px;
`

export const ButtonHeaderSwipe = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: none;
    color: white;
`
export const ButtonHeaderMatches = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: none;
    color: white;
    width: 30px;
    height: 30px;
`
export const SwipeImgButton = styled.img`
    width: 30px;
    height: 30px;
    
`
export const MatchesImgButton = styled.img`
    width: 30px;
    height: 30px;
`

export default {Logo, SwipeImgButton, MatchesImgButton, CardContainer, HeaderContainer, ButtonHeaderSwipe, ButtonHeaderMatches};