import React from 'react';
import styled from 'styled-components'

const Education = () => {
  return (
    <Container>
        <Title>EDUCATION</Title>
        <Wrapper>
            <Card> 
                <Top>Web Development (Full Stack)</Top>
                <Line></Line>
                <Middle>CodeLab, Lagos, Nigeria</Middle>
                <Bottom>2020-2021</Bottom>
                <Down>
                    <Line2></Line2>
                </Down>
            </Card>

            <Card> 
                <Top>Computer Science (BSc)</Top>
                <Line></Line>
                <Middle>ESCAE University, Benin Rep.</Middle>
                <Bottom>2014-2018</Bottom>
                <Down>
                    <Line2></Line2>
                </Down>
            </Card>

            <Card> 
                <Top>Computer Engineering (Diploma)</Top>
                <Line></Line>
                <Middle>Data-Point Institute, Lagos</Middle>
                <Bottom>2008-2009</Bottom>
                <Down>
                    <Line2></Line2>
                </Down>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Education;

const Container = styled.div`
    width: 100%;
    color: #F8F8FA;
    margin-top: 25px;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Title = styled.div`
    font-weight: bold;
    text-align: center;
    font-size: 18px;
`
const Card = styled.div`
    height: 150px;
    width: 290px;
    background-color: #2C2C38;
    margin: 10px 10px 10px 0;
    padding-left: 10px;

    :hover {
        background-color: #1F1F29;
        border: 1px solid whitesmoke;
    }

    @media screen and (max-width: 425px){
        padding-left: 5;
        margin: 10px 0 10px 0;
    }
`
const Top = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-top: 10px;
`

const Middle = styled.div``

const Bottom = styled.div`
    margin-top: 5px;
    font-style: italic;
`

const Line = styled.div`
    width: 35%;
    border: 1px solid #AC8411;
    margin-bottom: 10px;
    margin-top: 5px;
    
    :hover {
        border: 1px solid whitesmoke;
    }
`
const Down = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Line2 = styled.div`
    width: 20%;
    border: 2px solid #AC8411;
    margin-top: 25px;
`