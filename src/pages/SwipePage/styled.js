import styled from "styled-components";

export const SwipeButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 350px;
    height: 70px;
    padding: 10px;
    
`

export const LikeButton = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    border: solid green 1px;
    background-color: #359f35;


    &:active {
        background-color: #0e510e;
    }
`
export const HeartImgButton = styled.img`
    width: 30px;
    height: 30px;
    padding-top: 3px;

    &:hover {
        width: 34px;
        height: 34px;
    }
`

export const XImgButton = styled.img`
    width: 30px;
    height: 30px;
    padding-top: 3px;

    &:hover {
        width: 34px;
        height: 34px;
    }
`

export const DislikeButton = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    border: solid red 1px;
    background-color: #cd2828;

    &:active {
        background-color: #991313;
    }
`

export const SwipePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const ProfileContainer = styled.span`
    width: 350px;
    height: 400px;
    margin: 10px;
    box-sizing: border-box;
`

export const BackgrondPicture = styled.div`
    width: 350px;
    height: 400px;
    background-image: url(${(props) => props.photo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    border-radius: 20px;
    filter: blur(5px);
    box-shadow: 2px 2px 5px 2px black;
`

export const ProfilePicture = styled.div`
    width: 350px;
    height: 400px;
    background-image: url(${(props) => props.photo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100%;
    position: absolute;
    border-radius: 20px;
    box-shadow: 2px 2px 10px 4px black;
`


export const ProfileInformation = styled.span`
    width: 340px;
    height: 100px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 17px;
    color: white;
    text-shadow: 2px 2px 2px black;
    display: flex;
    flex-direction: column;
    padding-left: 10px;

    position: absolute;
    top: 380px
`

export const ProfileNameAndAge = styled.p`
    font-size: 30px;
    margin: 0px;
`

export const NoProfilesContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 370px;
    align-items: center;
    margin-top: 50px;
    padding: 0px 5px;
    text-align: center;
    margin-left: 10px;
`
export const NoProfilesImg = styled.img`
    width: 90px;
    height: 90px;
`

export const NoProfilesText = styled.p`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
    font-size: 20px;
`

export default {BackgrondPicture, NoProfilesContainer, NoProfilesImg,  NoProfilesText, XImgButton, HeartImgButton, DislikeButton, LikeButton, ProfileNameAndAge, SwipeButtonContainer, ProfileContainer, SwipePageContainer, ProfilePicture, ProfileInformation };