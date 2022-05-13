import React from 'react';
import styled from 'styled-components';
import Typist from 'react-text-typist';
import Bg from '../../../Images/bg.jpg';
import Profile from '../../../Images/img.png'

const Hero = () => {
  return (
    <MainContain>
      <Wrapper>
        <Left>
          <Title>Discover My Amazing <br/> Tech Space!</Title>
          <br />
          <Type>
            I build
            <Typist style={{marginLeft:'5px'}} sentences={["Web Applications", "Application Programming Interfaces(API's)", "Third Sentence"]} loop={true} />
          </Type>
          <br />
          <br />
          <Btn>Contact</Btn>
        </Left>

        <Imag src={Profile} alt="Profile"/>

      </Wrapper>
    </MainContain>
  )
}

export default Hero;

const MainContain = styled.div`
    width: 100%;
    height: 350px;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Bg});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 680px){
      height: auto;
    }
`
const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 860px){
        flex-direction: row-reverse;
        justify-content: space-around;
    }

    @media screen and (max-width: 680px){
      flex-wrap: wrap;
      flex-direction: column-reverse;
      width: 95%;
    }
`
const Left = styled.div`
  font-weight: bold;

  @media screen and (max-width: 680px){
      width: 100%;
    }
`

const Imag = styled.img`
  height: 350px;
`
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  width: 100%;
`
const Btn = styled.div`
  height: 40px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFC107;
  color: black;
  cursor: pointer;

  @media screen and (max-width: 680px){
      margin-bottom: 30px;
    }
`
const Type = styled.div`
`