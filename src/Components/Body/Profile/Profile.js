import React from 'react';
import styled from 'styled-components'
import Bg from '../../Images/bg.jpg'
import Experience from './Experience/Experience';
import Hero from './Hero/Hero';
import Work from './Process/Work'
import Education from './Education/Education'
import Projects from './Projects/Projects';
import StackSlider from './StackSlider';
import Contact from './Contact/Contact';

const Profile = () => {
  let date = new Date().getFullYear();
  console.log(date);

  return (
    <MainContainer>
        <MainWrap>
            <Hero />
            <br/>
            <Experience />
            <br/>
            <StackSlider />
            <br/>
            <Education />
            <br/>
            <Work />
            <br/>
            <Projects />
            <Contact />
        </MainWrap>
        <Foot>
          <FootWrap>
            <div>
              <span> 🚀 | © {date} All rights reserved</span>
            </div>
            <span style={{display:'flex'}}>
              <Disp>Developed by </Disp>
              <div style={{color:'lightgray', marginLeft:'5px'}}>
                Samuel Kelechi
              </div>
            </span>
          </FootWrap>
        </Foot>
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
    flex-direction: column;
    align-items: center;

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
const Foot = styled.div`
  width: 100%;
  height: 43px;
  background-color: #23232D;
  margin-bottom: 20px;
  color: white;
  display: flex;
  justify-content: center;
`
const FootWrap = styled.div`
  height: 100%;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Disp = styled.div`
  display: flex;

  @media screen and (max-width: 425px){
    display: none;
  }
`