import React from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import EDHF from './Images/Logo.png';
import GS from './Images/Logo1.png';
import UD from './Images/Logo2.png';
import Udeme from './Images/udeme.jpg';
import Great from './Images/Great.jpg';
import Elisha from './Images/Elisha.jpg';



const Projects = () => {
    const [value, setValue] = React.useState(5);
    const [toggle, setToggle] = React.useState();

    const Switch = () => {
        setToggle(!toggle)
    }

  return (
    <Container>
        <Title>PROJECTS</Title>
        <Wrapper>
            <a href='https://elisha-foundation.web.app/' target='_blank'>
                <Card>
                    <Wrap>
                        <Top>
                            <Left>
                                <h3>ELISHA FOUNDATION</h3>
                                <p>A platform for an NGO</p>
                            </Left>
                            <Right src={EDHF}/>
                        </Top>

                        <Avat src={Elisha}/>

                        <Bottom> 
                            <Rating name="read-only" value={value} readOnly />
                        </Bottom>
                    </Wrap>
                </Card>
            </a>

            <a href='https://silver-quest-296801.web.app/' target='_blank'>
                <Card>
                    <Wrap>
                        <Top>
                            <Left>
                                <h3>GREAT SHEPHERD</h3>
                                <p>A University Web App</p>
                            </Left>
                            <Right src={GS}/>
                        </Top>

                        <Avat src={Great}/>

                        <Bottom> 
                            <Rating name="read-only" value={value} readOnly />
                        </Bottom>
                    </Wrap>
                </Card>
            </a>

            <a href='https://udemekitchen.herokuapp.com/' target='_blank'>
            <Card>
                <Wrap>
                    <Top>
                        <Left>
                            <h3>UDEME'S KITCHEN</h3>
                            <p>A food ordering Application</p>
                        </Left>
                        <Right src={UD}/>
                    </Top>

                    <Avat src={Udeme}/>

                    <Bottom> 
                        <Rating name="read-only" value={value} readOnly />
                    </Bottom>
                </Wrap>
            </Card>
            </a>

            {toggle ? (
                <>
            <Card>
                <Wrap>
                    <Top>
                        <Left>
                            <h3>TITLE</h3>
                            <p>description</p>
                        </Left>
                        <Right />
                    </Top>

                    <Avat />

                    <Bottom> 
                        <Rating name="read-only" value={value} readOnly />
                    </Bottom>
                </Wrap>
            </Card>

            <Card>
                <Wrap>
                    <Top>
                        <Left>
                            <h3>TITLE</h3>
                            <p>description</p>
                        </Left>
                        <Right />
                    </Top>

                    <Avat />

                    <Bottom> 
                        <Rating name="read-only" value={value} readOnly />
                    </Bottom>
                </Wrap>
            </Card>

            <Card>
                <Wrap>
                    <Top>
                        <Left>
                            <h3>TITLE</h3>
                            <p>description</p>
                        </Left>
                        <Right />
                    </Top>

                    <Avat />

                    <Bottom> 
                        <Rating name="read-only" value={value} readOnly />
                    </Bottom>
                </Wrap>
            </Card>

            <Card>
                <Wrap>
                    <Top>
                        <Left>
                            <h3>TITLE</h3>
                            <p>description</p>
                        </Left>
                        <Right />
                    </Top>

                    <Avat />

                    <Bottom> 
                        <Rating name="read-only" value={value} readOnly />
                    </Bottom>
                </Wrap>
            </Card>

            <Card>
                <Wrap>
                    <Top>
                        <Left>
                            <h3>TITLE</h3>
                            <p>description</p>
                        </Left>
                        <Right />
                    </Top>

                    <Avat />

                    <Bottom> 
                        <Rating name="read-only" value={value} readOnly />
                    </Bottom>
                </Wrap>
            </Card>

            <Card>
                <Wrap>
                    <Top>
                        <Left>
                            <h3>TITLE</h3>
                            <p>description</p>
                        </Left>
                        <Right />
                    </Top>

                    <Avat />

                    <Bottom> 
                        <Rating name="read-only" value={value} readOnly />
                    </Bottom>
                </Wrap>
            </Card>
</>
            ):(
                null
            )}

        </Wrapper>

        {toggle ? (<Button onClick={Switch}>View Less</Button>)
        :(<Button onClick={Switch}>View More</Button>)}
    </Container>
  )
}

export default Projects;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 20px;
`
const Title = styled.div`
    font-weight: bold;
    font-size: 18px;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    a{
        text-decoration: none;
        color: inherit;
        width: auto;

        @media screen and (max-width: 425px){
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
`
const Card = styled.div`
    background-color: #2C2C38;
    height: 280px;
    width: 300px;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    margin-top: 35px;

    @media screen and (max-width: 425px){
        width: 95%;
    }
`
const Wrap = styled.div`
    width: 90%;

    @media screen and (max-width: 425px){
        width: 95%;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    margin-top: 7px;
    p{
        /* color: #4D4D54; */
        color: grey;
    }
`

const Right = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 100%;
    background-color: white;
    margin-top: -25px;
`
const Avat = styled.img`
    height: 180px;
    margin-top: 8px;
    width: 100%;
    background-color: white;
    object-fit: cover;
    object-position: center;
    border-radius: 5px;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
`
const Bottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 8px;
`
const Button = styled.button`
    margin-top: 12px;
    width: 80px;
    height: 25px;
    cursor: pointer;
    border-radius: 5px;
    outline: none;

    :hover{
        background-color: #23232D;
        color: white;
    }
`