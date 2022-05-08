import React from 'react';
import styled from 'styled-components';

import Bg from '../../../Images/bg.jpg'

const Hero = () => {
  return (
    <MainContain>

    </MainContain>
  )
}

export default Hero;

const MainContain = styled.div`
    width: 100%;
    height: 350px;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${Bg});
    background-position: center;
    background-size: cover;
`