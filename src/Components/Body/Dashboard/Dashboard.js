import React from 'react';
import styled from 'styled-components';
import Rating from './Ratings/Rate'

function Dashboard() {
  return (
    <MainContainer>
        <TopFixed>
            <TopHold>
                <Avart />
                <Name>SAMUEL KELECHI</Name>
                <p>Full Stack Developer</p>
            </TopHold>
        </TopFixed>

        <MiddleScroll>
            <MiddleWrap>
                <Locate>
                    <Hold>
                        <Left>Residence:</Left>
                        <Right>Nigeria</Right>
                    </Hold>
                    <Hold>
                        <Left>City:</Left>
                        <Right>Lagos</Right>
                    </Hold>
                    <Hold>
                        <Left>Location:</Left>
                        <Right>Olodi-Apapa</Right>
                    </Hold> 
                </Locate>
                <br />
                <Line></Line>
                <br />
                <Ratings>
                    <Rate>
                        <Rating percentage="90"/>
                        English
                    </Rate>
                    <Rate>
                    <Rating percentage="70"/>
                    French
                    </Rate> 
                    <Rate>
                    <Rating percentage="40"/>
                    German
                    </Rate>
                </Ratings>
                <br />
                <Line></Line>
                <br />

            </MiddleWrap>
        </MiddleScroll>

        <BottomFixed>

        </BottomFixed>
    </MainContainer>
  )
}

export default Dashboard;

const MainContainer = styled.div`
    width: 25%;
    height: auto;
    position: relative;
`
const TopFixed = styled.div`
    height: 250px;
    background-color: #252530;
    width: 24.2%;
    top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;
`
const TopHold = styled.div`
    text-align: center;
    font-weight: bold;

    p{
        color: grey;
        margin-top: 10px;
        font-weight: lighter;
    }
`
const BottomFixed = styled.div`
    background-color: #24242F;
    position: absolute;
    bottom: 20px;
    height: 50px;
    width: 24.2%;
    position: fixed;
`
const Avart = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: white;
`
const Name = styled.div``

const MiddleScroll = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: #20202A;
    position: relative;
    top: 275px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`
const MiddleWrap = styled.div`
    width: 80%;
`
const Locate = styled.div`
    margin-top: 20px;
`

const Hold = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

const Left = styled.div``

const Right = styled.div`
    color: grey;
`

const Line = styled.div`
    width: 100%;
    border: 1px solid grey;
`

const Ratings = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

const Rate = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
