import React from 'react';
import styled from 'styled-components';
import Dashboard from './Dashboard/Dashboard';
import Profile from './Profile/Profile';

const Body = () => {
  return (
    <Container>
        <Dashboard />
        <Profile />
    </Container>
  )
}

export default Body;

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
`