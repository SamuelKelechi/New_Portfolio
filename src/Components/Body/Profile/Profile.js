import React from 'react';
import styled from 'styled-components'
import Bg from '../../Images/bg.jpg'
import Hero from './Hero/Hero';

const Profile = () => {
  return (
    <MainContainer>
        <MainWrap>
            <Hero />

        </MainWrap>

    </MainContainer>
  )
}

export default Profile;

const MainContainer = styled.div`
    width: 75%;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Bg});
    background-position: fixed;
    background-position: bottom;
    background-size: cover;
    display: flex;
    justify-content: center;
`
const MainWrap = styled.div`
    width: 95%;
    margin-top: 60px;
`