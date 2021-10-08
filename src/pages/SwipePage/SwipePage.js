import axios from "axios";
import React, { useEffect, useState } from "react";
import { NoProfilesContainer, BackgrondPicture, NoProfilesImg, NoProfilesText, XImgButton, HeartImgButton, DislikeButton, LikeButton, ProfileNameAndAge, SwipeButtonContainer, ProfileContainer, SwipePageContainer, ProfilePicture, ProfileInformation } from './styled';
import { url, headers } from "../../constants/Constants";
import xBranco from '../../assets/x-branco.png';
import coracaoBranco from '../../assets/coracao-branco.png'
import heart from '../../assets/broken-heart.png'



function SwipePage(props) {
    const [profile, setProfile] = useState({})
    const clear = props.clearButton

    useEffect(() => {
        getProfileToChoose()
    }, [clear])

    const getProfileToChoose = () => {
        axios.get(`${url}/person`)
            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const choosePerson = (boolean) => {
        const body = {
            id: profile.id,
            choice: boolean
        };
        axios.post(`${url}/choose-person`, body, headers)
            .then((res) => {
                console.log(res.data)
            })
        axios.get(`${url}/person`)
            .then((res) => {
                setProfile(res.data.profile)
            })
    }


    return (
        <div>
            {profile ?
                <SwipePageContainer>
                    <ProfileContainer>
                        <BackgrondPicture photo={profile.photo} />
                        <ProfilePicture photo={profile.photo} />
                        <ProfileInformation>
                            <ProfileNameAndAge>{profile.name}, {profile.age}</ProfileNameAndAge>
                            <p>{profile.bio}</p>
                        </ProfileInformation>
                    </ProfileContainer >
                    <SwipeButtonContainer>
                        <DislikeButton onClick={() => choosePerson(false)}><XImgButton src={xBranco} /></DislikeButton>
                        <LikeButton onClick={() => choosePerson(true)}><HeartImgButton src={coracaoBranco}></HeartImgButton></LikeButton>
                    </SwipeButtonContainer>
                </SwipePageContainer >
                :
                <NoProfilesContainer>
                    <NoProfilesImg src={heart} />
                    <NoProfilesText>Não existem mais perfis disponíveis. Limpe a lista de perfis no botão ao lado</NoProfilesText>
                </NoProfilesContainer>
                }
        </div>
    )
};

export default SwipePage