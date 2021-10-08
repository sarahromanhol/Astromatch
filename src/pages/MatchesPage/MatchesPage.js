import axios from "axios";
import React, { useEffect, useState } from "react";
import {NoMatchesContainer, NoMatchesImg, NoMatchesText, MatchedPersonContainer, LittlePhotoProfile, NameProfile} from './styled';
import heart from '../../assets/broken-heart.png'

function MatchesPage(props) {

    const [matchesList, setMatchesList] = useState([]);
    const clear = props.clearButton

    useEffect(() => {
        getMatches()
    }, [clear])

    const getMatches = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sarah-romanhol-maryam/matches')
            .then((res) => {
                setMatchesList(res.data.matches)
            })
    }

    const matches = matchesList.map((person) => {
        return (
            <MatchedPersonContainer key={person.id}>
                <LittlePhotoProfile src={person.photo} />
                <NameProfile>{person.name}</NameProfile>
            </MatchedPersonContainer>
        )
    })


    return (
        <div>
            {
            matchesList.length
            ?
            matches
            :
            <NoMatchesContainer>
            <NoMatchesImg src={heart} />
            <NoMatchesText>Você ainda não tem matches</NoMatchesText>
            </NoMatchesContainer>}
        </div>
    )
}
export default MatchesPage;