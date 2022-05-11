import React from 'react';
import styled from 'styled-components'
import Bg from '../../Images/bg.jpg'
import Experience from './Experience/Experience';
import Hero from './Hero/Hero';
import Work from './Process/Work'
import Education from './Education/Education'

const Profile = () => {

  return (
    <MainContainer>
        <MainWrap>
            <Hero />
            <br/>
            <Experience />
            <br/>
            <Education />
            <br/>
            <Work />
        </MainWrap>

    </MainContainer>
  )
}

export default Profile;

const MainContainer = styled.div`
    width: 75%;
    height: auto;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Bg});
    background-position: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 860px){
        width: 95%;
    }
`
const MainWrap = styled.div`
    width: 95%;
    margin-top: 40px;
    padding: 20px 0 20px 0;

    @media screen and (max-width: 425px){
      margin-top: 30px;
    }
`
