import React from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import EDHF from './Images/Logo.png';
import GS from './Images/Logo1.png';
import UD from './Images/Logo2.png';
import LotsLogo from './Images/lots.png';
import DataL from './Images/data1.png';
import UtacLogo from './Images/utac.png';

import Udeme from './Images/udeme.jpg';
import Great from './Images/Great.jpg';
import Elisha from './Images/Elisha.jpg';
import CodeLab from './Images/codelab.jpg';
import Teens from './Images/teens.jpg';
import UTAC from './Images/utac.jpg';
import LOTS from './Images/lots.jpg';
import Data from './Images/data.jpg';
import Report from './Images/report.jpg';




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
                                <p>A Platform for an NGO</p>
                            </Left>
                            <Right src={EDHF}/>
                        </Top>

                        <Avat src={Elisha}/>

                        <Bottom> 
                            <Rating name="read-only" defaultValue={2.5} precision={5.0} readOnly />
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
                            <Rating name="read-only" defaultValue={2.5} precision={5.0} readOnly />
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
                            <p>A Food Ordering Application</p>
                        </Left>
                        <Right src={UD}/>
                    </Top>

                    <Avat src={Udeme}/>

                    <Bottom> 
                        <Rating name="read-only" defaultValue={2.5} precision={5.0} readOnly/>
                    </Bottom>
                </Wrap>
            </Card>
            </a>

            {toggle ? (
                <>
            <a href='https://codelab-home.web.app/' target='_blank'>
            <Card>
                <Wrap>
                    <Top>
                        <Left>
                            <h3>CODELAB</h3>
                            <p>CodeLab Official Platform</p>
                        </Left>
                        <Right />
                    </Top>

                    <Avat src={CodeLab}/>

                    <Bottom> 
                        <Rating name="half-rating-read" defaultValue={2.5} precision={5.0} readOnly />
                    </Bottom>
                </Wrap>
            </Card>
            </a>
            
            <a href='https://utacngo.web.app/' target='_blank'>
            <Card>
                <Wrap>
                    <Top>
                        <Left>
                            <h3>UTAC</h3>
                            <p>An NGO Web Platform</p>
                        </Left>
                        <Right src={UtacLogo}/>
                    </Top>

                    <Avat src={UTAC}/>

                    <Bottom> 
                        <Rating name="read-only" value={value} readOnly />
                    </Bottom>
                </Wrap>
            </Card>
            </a>

            <a href='https://schoolproject-e54ac.web.app/' target='_blank'>
            <Card>
                <Wrap>
                    <Top>
                        <Left>
                            <h3>TEENS PROJECT</h3>
                            <p>A Cloned Learning App</p>
                        </Left>
                        <Right />
                    </Top>

                    <Avat src={Teens}/>

                    <Bottom> 
                        <Rating name="read-only" value={value} readOnly />
                    </Bottom>
                </Wrap>
            </Card>
            </a>

            <a href='https://security-dev-project.web.app/' target='_blank'>
            <Card>
                <Wrap>
                    <Top>
                        <Left>
                            <h3>SECURITY APP</h3>
                            <p>A Community Report App</p>
                        </Left>
                        <Right />
                    </Top>

                    <Avat src={Report}/>

                    <Bottom> 
                        <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
                    </Bottom>
                </Wrap>
            </Card>
            </a>
            
            <a href='https://lotsngo.web.app/' target='_blank'>
            <Card>
                <Wrap>
                    <Top>
                        <Left>
                            <h3>LOTS FOUNDATION</h3>
                            <p>A Charity Organization App</p>
                        </Left>
                        <Right src={LotsLogo}/>
                    </Top>

                    <Avat src={LOTS}/>

                    <Bottom> 
                        <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
                    </Bottom>
                </Wrap>
            </Card>
            </a>
            
            <a href='https://ajegunle-developers.web.app/' target='_blank'>
            <Card>
                <Wrap>
                    <Top>
                        <Left>
                            <h3>DATA COLLECTION APP</h3>
                            <p>AJ Developers Database</p>
                        </Left>
                        <Right src={DataL}/>
                    </Top>

                    <Avat src={Data}/>

                    <Bottom> 
                        <Rating name="half-rating-read" defaultValue={2.5} precision={4.5} readOnly />
                    </Bottom>
                </Wrap>
            </Card>
            </a>
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