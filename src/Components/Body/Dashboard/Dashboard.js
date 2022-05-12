import React,{useState} from 'react';
import styled from 'styled-components';
import Rating from './Ratings/Rate';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CircleIcon from '@mui/icons-material/Circle';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Profile from '../../Images/b11.png';
import {FaBars, FaTimes} from 'react-icons/fa';
import SAMCV from '../../Images/cv.pdf'

function Dashboard() {
    const [click, setClick] = useState(false);

    const handClick = () => {
        setClick(!click)
    }

  return (
      <>
    <Mobile  onClick={handClick}>{click ?<FaTimes />:<FaBars />}</Mobile>
    <MainContainer onClick={handClick} click={click}>
        <TopFixed>
        
            <TopHold>
                <Avart src={Profile}/>
                <Bulb>
                    <Circle />
                </Bulb>
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
                        Front-End
                    </Rate>
                    <Rate>
                        <Rating percentage="70"/>
                        Back-End
                    </Rate> 
                    <Rate>
                        <Rating percentage="40"/>
                        DevOps
                    </Rate>
                </Ratings>
                <br />
                <Line></Line>
                <br />
                <OtherStacks>
                    <span>
                        <CircleIcon style={{ color:'#FFC107', fontSize:'8px', paddingRight:'3px'}}/>
                        Redux, Context API, Material UI, Styled-Components, PWA...
                    </span>
                    <br/>
                    <br/>
                    <span>
                        <CircleIcon style={{ color:'#FFC107', fontSize:'8px', paddingRight:'3px'}}/>
                        ExpressJS, MongoDB, Firebase, 
                    </span>
                    <br/>
                    <br/>
                    <span>
                        <CircleIcon style={{ color:'#FFC107', fontSize:'8px', paddingRight:'3px'}}/>
                        LAMP, CI/CD, Git/GitHub, Heroku 
                    </span>
                </OtherStacks>
                <Line></Line>
                <CV>
                    <a href={SAMCV} download="CV">DOWNLOAD CV <FileDownloadIcon /></a>
                </CV>
            </MiddleWrap>
        </MiddleScroll>

        <BottomFixed>
            <span>
                <a href='https://www.linkedin.com/in/samuel-kelechi/' target='_blank' >
                    <LinkedInIcon />
                </a>

                <a href='https://web.facebook.com/skelechi3' target='_blank' >
                    <FacebookIcon />
                </a>

                <a href='https://twitter.com/Samuel_Kelechi1' target='_blank' >
                    <TwitterIcon />
                </a>

                <a href='https://github.com/SamuelKelechi' target='_blank' >
                    <GitHubIcon />
                </a>

                <a href="https://wa.me/2348137253138"  rel="noopener noreferrer" target='_blank' >
                    <WhatsAppIcon />
                </a>
            </span>
        </BottomFixed>
    </MainContainer>
    </>
  )
}

export default Dashboard;

const MainContainer = styled.div`
    width: 25%;

    @media screen and (max-width: 860px){
        display: flex;
        flex-direction: column;
        position: absolute;
        padding-right: 0;
        top:0px;
        justify-content: flex-start;
        width: 100%;
        background: #101522;
        left: ${({click}) => (click? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1200;
    }

    @media screen and (max-width: 425px){
        height: 100vh;
    }
`
const TopFixed = styled.div`
    height: 40vh;
    background-color: #252530;
    width: 24.2%;
    top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;

    @media screen and (max-width: 860px){
        width: 100%;
        position: fixed;
        top: 0;
        height: 190px;
    }
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
    height: 7vh;
    width: 24.2%;
    position: fixed;
    display: flex;
    justify-content: center;

    span{
      width: 80%;
      height: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a{
        color: inherit;

          :hover{
              color: grey;
          }
      }
    }
    @media screen and (max-width: 860px){
        width: 60%;
        bottom: 0;
    }
    @media screen and (max-width: 768px){
        width: 100%;
        justify-content: flex-start;

        span{
            width: 60%;
            justify-content: space-evenly;
        }
    }
    @media screen and (max-width: 425px){
        width: 100%;
        bottom: 0;
        span{
            width: 100%;
        }
    }
`
const Avart = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: white;
    object-fit: cover;
    object-position: top;

`
const Name = styled.div``

const MiddleScroll = styled.div`
    width: 24.2%;
    height: 65vh;
    background-color: #20202A;
    position: fixed;
    top: 272px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 860px){
        width: 100%;
        top: 180px;
        height: 70vh;
    }

    @media screen and (max-width: 860px){
        top: 185px;
    }
`
const MiddleWrap = styled.div`
    width: 80%;
`
const Locate = styled.div`
    margin-top: 10px;
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

const Stacks = styled.div`
    
    div{
        margin-top: 10px;
    }
`

const OtherStacks = styled.div`
    color: grey;
    width: 100%;
    margin-bottom: 15px;
`
const CV = styled.div`
    display: flex;
    color: grey;
    font-size: 13px;
    cursor: pointer;
    margin-top: 8px;

    :hover{
        color: white;
    }

    a{
        text-decoration: none;
        color: inherit;
        display: flex;
    }
`
const Bulb = styled.div`
    width: 100%;
    background-color: red;
    display: flex;
    justify-content: center
`
const Circle = styled.div`
    height: 10px;
    width: 10px;
    background-color: #FFC107;
    margin-top: -25px;
    margin-right: -73px;
    border-radius: 100%;
`
const Mobile = styled.div`
  display: none;

  @media screen and (max-width: 860px){
  display: flex;
  font-size: 22px;
  position: fixed;
  top: 10px;
  right: 15px;
  transform: translate(-100%, 60%);
  z-index: 1300;
}
`