import styled from "styled-components";

export const MatchedPersonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr;
    border: solid black 1px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
    margin-bottom: 5px;
    border-radius: 10px;
    background-color: black;

    &:hover{
        background-color: #359f8b;
    }
`

export const LittlePhotoProfile = styled.img`
    width: 50px;
    height: 50px;
    border-radius:  50%;
    text-align: center;
    align-self: center;
    justify-self: center;
`
export const NameProfile = styled.p`
    font-size: 18px;
    justify-self: start;
    margin-left: 15px;
    align-self: center;
`
export const NoMatchesContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 400px;
    align-items: center;
    justify-items: center;
    margin-top: 50px;
`
export const NoMatchesImg = styled.img`
    width: 70px;
    height: 70px;
`

export const NoMatchesText = styled.p`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
    font-size: 20px;
`

export default {NoMatchesContainer, NoMatchesImg, NoMatchesText, MatchedPersonContainer, LittlePhotoProfile, NameProfile};