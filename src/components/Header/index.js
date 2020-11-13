import React from 'react'
import RMDBLogo from '../../assets/images/react-movie-logo.svg'
import TMDBLogo from '../../assets/images/tmdb_logo.svg'


//desestruturação para pegar cada elemento sem precisar de tudo
import {Wrapper, Content, LogoImg, TMDBLogoImg} from './styles'

export default function Header () {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={RMDBLogo} alt="rmdb-logo" />
                <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
            </Content>
        </Wrapper>
    )
}