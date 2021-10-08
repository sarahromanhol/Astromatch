import React, { useState } from "react";
import { Logo, SwipeImgButton, MatchesImgButton, CardContainer, HeaderContainer, ButtonHeaderSwipe, ButtonHeaderMatches } from "./styled";
import SwipePage from "../../pages/SwipePage/SwipePage";
import MatchesPage from '../../pages/MatchesPage/MatchesPage';
import logo from '../../assets/astromatch-s-fundo-2.png';
import matches from '../../assets/lovers-chatting-branco.png';
import swipe from '../../assets/fas-branco.png'

const MainCard = (props) => {
    const [currentPage, setCurrentPage] = useState('swipePage')

    const changePage = (page) => {
        setCurrentPage(page)
    }

    const renderCurrentPage = () => {
        switch (currentPage) {
            case 'matchesPage':
                return <MatchesPage clearButton={props.clearButton} />
            case 'swipePage':
                return <SwipePage clearButton={props.clearButton}/>
            default:
                return <SwipePage clearButton={props.clearButton}/>
        }
    }

    return (
        <CardContainer>
            <div>
                <HeaderContainer>
                    <ButtonHeaderSwipe onClick={() => changePage('swipePage')}><SwipeImgButton src={swipe} /></ButtonHeaderSwipe>
                    <Logo src={logo} alt='logo astromatch' />
                    <ButtonHeaderMatches onClick={() => changePage('matchesPage')}><MatchesImgButton src={matches} /></ButtonHeaderMatches>
                </HeaderContainer>
                {renderCurrentPage()}
            </div>
        </CardContainer>
    )
}

export default MainCard;