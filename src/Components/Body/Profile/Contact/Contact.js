import React from 'react';
import styled from 'styled-components';


const Contact = () => {
  return (
    <Container>
        <Wrapper>
           <MapHold>
                <iframe style={{height:'100%', width:'100%', borderRadius:'8px'}} id="gmap_canvas" src="https://maps.google.com/maps?q=Ajeromi%20ifelodun&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"></iframe>
            </MapHold>
           <ConctHold>
                <Title>Contact Me</Title>
                <br/>
                <span>
                    Address :<p>Lagos, 102241, Nigeria</p>
                </span>
                <span>
                    Phone :<p>+234 8137253138</p>
                </span>
                <span>
                    Email :<p>ujunwasamuelk@yahoo.com</p>
                </span>  
           </ConctHold>
        </Wrapper>
    </Container>
  )
}
export default Contact;

const Container = styled.div`
    width: 100%;
    margin-bottom: 20px;
`
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`

const MapHold = styled.div`
    width:500px;
    height: 300px;
    margin: 10px;
    border-radius: 8px;

    @media screen and (max-width: 425px){
        width: 95%;
    }
`

const ConctHold = styled.div`
    width: 350px;
    height: 130px;
    margin: 10px;

    @media screen and (max-width: 425px){
        width: 90%;
    }

    span{
        font-size: 18px;
        display: flex;
        font-weight: bold;
        margin-bottom: 10px;

        p{
            font-weight: lighter;
            margin-left: 5px;
        }

        @media screen and (max-width: 425px){
            font-size: 15px;
        }
    }
`
const Title = styled.div`
    font-size: 20px;
    color: #D19F0D;
    font-weight: bold;
`